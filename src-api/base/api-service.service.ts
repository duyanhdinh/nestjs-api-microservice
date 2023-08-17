import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { MICROSERVICE_NAME } from '@/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiServiceService {
  constructor(@Inject(MICROSERVICE_NAME) protected client: ClientProxy) {}

  async clientSend(cmd: any, payload: any = {}, ttl = 5000) {
    return lastValueFrom(this.client.send({ cmd }, payload).pipe(timeout(ttl)));
  }
}

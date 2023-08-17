import { Inject, Injectable } from "@nestjs/common";
import { CLIENT_REQUEST } from "@/microservices/command.const";
import { ClientProxy } from "@nestjs/microservices";
import { MICROSERVICE_NAME } from "@/microservices";
import { ApiServiceService } from "@/base/api-service.service";

@Injectable()
export class DemoApiService extends ApiServiceService {
  public constructor(@Inject(MICROSERVICE_NAME) client: ClientProxy) {
    super(client);
  }
  demo(body: any) {
    return this.clientSend(CLIENT_REQUEST.DEMO, body);
  }
}

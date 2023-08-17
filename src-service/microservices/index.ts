import * as dotenv from 'dotenv';
dotenv.config();
import { DynamicModule } from '@nestjs/common';
import { ClientProviderOptions, ClientsModule } from '@nestjs/microservices';
import { redisMicroOptions } from '@/microservices/redis.config';
import { rmqMicroOptions } from '@/microservices/rabbitmq.config';

let options: ClientProviderOptions[];

switch (process.env.MICROSERVICE_TRANSPORT) {
  case 'Redis':
    options = [redisMicroOptions];
    break;
  case 'RabbitMQ':
  default:
    options = [rmqMicroOptions];
    break;
}

export const MicroserviceModule = (isGlobal = true): DynamicModule => {
  const clientsModule = ClientsModule.register(options);
  clientsModule.global = isGlobal;
  return clientsModule;
};

export const MICROSERVICE_NAME = process.env.MICROSERVICE_NAME;

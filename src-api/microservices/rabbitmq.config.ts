import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const rmqMicroOptions: ClientProviderOptions[] = [
  {
    name: process.env.MICROSERVICE_NAME,
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_ENDPOINT ? process.env.RMQ_ENDPOINT : `amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`],
      queue: process.env.RMQ_QUEUE,
    },
  },
];

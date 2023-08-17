import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const redisMicroOptions: ClientProviderOptions[] = [
  {
    name: process.env.MICROSERVICE_NAME,
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      ...(process.env.REDIS_USERNAME && process.env.REDIS_USERNAME != ''
        ? {
            username: process.env.REDIS_USERNAME,
            password: process.env.REDIS_PASSWORD,
          }
        : {}),
    },
  },
];

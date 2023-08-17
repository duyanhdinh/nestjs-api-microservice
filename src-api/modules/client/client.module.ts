import { Module } from '@nestjs/common';
import { ClientInterceptor } from "./client.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClientInterceptor,
    },
  ],
})
export class ClientModule {}

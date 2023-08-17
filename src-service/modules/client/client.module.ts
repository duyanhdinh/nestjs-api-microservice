import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheInterceptor } from '@cache-modules/cache.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class ClientModule {}

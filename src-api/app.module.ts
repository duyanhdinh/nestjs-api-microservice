import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MicroserviceModule } from "@/microservices";
import { ClientModule } from "@client-modules/client.module";
import { ThrottlerModule } from "@nestjs/throttler";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MicroserviceModule(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 2,
    }),
    ClientModule,
  ],
})
export class AppModule {}

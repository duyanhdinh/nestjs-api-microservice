import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { ClientModule } from "@client-modules/client.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientModule
  ],
})
export class AppModule {}

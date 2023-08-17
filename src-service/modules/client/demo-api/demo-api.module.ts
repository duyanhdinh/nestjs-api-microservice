import { Module } from '@nestjs/common';
import { DemoApiService } from './demo-api.service';
import { DemoApiController } from './demo-api.controller';

@Module({
  providers: [DemoApiService],
  controllers: [DemoApiController]
})
export class DemoApiModule {}

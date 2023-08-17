import { Controller } from "@nestjs/common";
import { DemoApiService } from "@client-modules/demo-api/demo-api.service";
import { CLIENT_REQUEST } from "@/microservices/command.const";
import { MessagePattern } from "@nestjs/microservices";

@Controller('demo-api')
export class DemoApiController {
  constructor(private readonly demoApiService: DemoApiService) {}

  @MessagePattern({ cmd: CLIENT_REQUEST.DEMO })
  async demo(body: any) {
    return this.demoApiService.demo(body)
  }
}

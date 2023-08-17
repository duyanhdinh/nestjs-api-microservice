import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { DemoApiService } from "@client-modules/demo-api/demo-api.service";
import { demoClientRouteSwagger } from "@decorators/route-swagger/client.decorator";

@Controller('demo-api')
export class DemoApiController {
  constructor(private readonly demoApiService: DemoApiService) {}

  @demoClientRouteSwagger()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  async demo(body: any) {
    return this.demoApiService.demo(body)
  }
}

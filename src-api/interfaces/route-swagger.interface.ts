import { ApiBodyOptions, ApiResponseOptions } from "@nestjs/swagger";

export interface RouteSwagger {
  tag?: string;
  body?: ApiBodyOptions;
  apiResponses?: ApiResponseOptions[];
  apiResponseOkType?: any;
}

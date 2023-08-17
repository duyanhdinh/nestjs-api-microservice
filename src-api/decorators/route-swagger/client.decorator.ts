import { RouteSwagger } from "@decorators/route-swagger/index.decorator";
import { RouteSwagger as RouteSwaggerInterface } from '@itf/route-swagger.interface';
import { SWWAGER_TAG } from "@const/swagger-tag.const";

export const demoClientRouteSwagger = (args: RouteSwaggerInterface = {}) =>
  RouteSwagger({ tag: SWWAGER_TAG.DEMO, ...args });
import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiBody,
  ApiResponse,
  ApiResponseOptions,
  ApiTags,
} from '@nestjs/swagger';
import { RouteSwagger as RouteSwaggerInterface } from '@itf/route-swagger.interface';
import { HttpBadRequestEntity } from "@/entity/http-bad-request.entity";
import { HttpBadGatewayEntity } from "@/entity/http-bad-gateway.entity";

let decorators = [];

const apiResponseDefault: ApiResponseOptions[] = [
  {
    status: HttpStatus.BAD_REQUEST,
    description: 'bad request',
    type: HttpBadRequestEntity,
  },
  {
    status: HttpStatus.BAD_GATEWAY,
    description: 'bad gateway',
    type: HttpBadGatewayEntity,
  },
];

/**
 * Add ApiResponse decor to list decor
 * @param item
 * */
const addDecorApiResponse = (item) => decorators.push(ApiResponse(item));

/**
 * Apply multi decor of swagger for route
 * @param args
 * */
export const RouteSwagger = (args: RouteSwaggerInterface) => {
  decorators = [];

  if ('tag' in args) {
    decorators.push(ApiTags(args.tag));
  }

  if ('body' in args) {
    decorators.push(ApiBody(args.body));
  }

  /*api response*/
  if ('apiResponses' in args) {
    args.apiResponses.forEach(addDecorApiResponse);
  }

  if ('apiResponseOkType' in args) {
    apiResponseDefault.push({
      status: HttpStatus.OK,
      description: 'request ok',
      type: args.apiResponseOkType,
    });
  }
  apiResponseDefault.forEach(addDecorApiResponse);

  return applyDecorators(...decorators);
};

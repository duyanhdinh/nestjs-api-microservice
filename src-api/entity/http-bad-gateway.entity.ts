import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class HttpBadGatewayEntity {
  @ApiProperty({
    description: 'Http status code',
    name: 'statusCode',
    default: HttpStatus.BAD_GATEWAY,
  })
  statusCode: number = HttpStatus.BAD_GATEWAY;

  @ApiProperty({
    description: 'message error',
    name: 'message',
    default: 'Bad Gateway',
  })
  message: string;
}

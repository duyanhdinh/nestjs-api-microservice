import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class HttpBadRequestEntity {
  @ApiProperty({
    description: 'Http status code',
    name: 'statusCode',
    default: HttpStatus.BAD_REQUEST,
  })
  statusCode: number = HttpStatus.BAD_REQUEST;

  @ApiProperty({
    description: 'message error',
    name: 'message',
    default: 'Bad Gateway',
  })
  message: string;
}

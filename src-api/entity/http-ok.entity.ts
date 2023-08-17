import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class HttpOkEntity {
  constructor(partial: Partial<unknown>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Http status code',
    name: 'statusCode',
    default: HttpStatus.OK,
  })
  @IsNumber()
  status: number = HttpStatus.OK;
}

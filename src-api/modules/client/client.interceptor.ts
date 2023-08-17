import {
  BadGatewayException,
  BadRequestException,
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable()
export class ClientInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (typeof data === 'object' && data !== null && 'status' in data) {
          if (data.status === HttpStatus.OK) {
            data.statusCode = HttpStatus.OK;
            delete data.status;
            return data;
          }
          throw new BadGatewayException(data.message);
        }
        return this.formatResponseSuccess(data);
      }),
      catchError((err) => {
        switch (err.constructor) {
          case BadRequestException:
          case BadGatewayException:
            return throwError(() => err);
          default:
            return throwError(() => new BadRequestException());
        }
      }),
    );
  }

  formatResponseSuccess(data: unknown): { status: HttpStatus; data: unknown } {
    return {
      status: HttpStatus.OK,
      data,
    };

  }
}

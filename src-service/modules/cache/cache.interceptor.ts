import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    // get cache key
    // get data cache: cacheData = await this.cacheManager.get(cacheKey);

    // check if data cache exist and not need to reset data
    // return this.formatResponseSuccess(cacheData);

    return next.handle().pipe(
      map((data) => {
        // check if not cache and need to cache
        // this.cacheManager.set(cacheKey, data, ttl);

        return this.formatResponseSuccess(data);
      }),
      catchError((err) => {
        return of({
          status: err.status ?? HttpStatus.BAD_GATEWAY,
          message: err.response?.message,
          error: err.response?.error ?? err.message,
        });
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

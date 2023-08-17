import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class CacheBaseService {
  constructor(@Inject(CACHE_MANAGER) protected cacheManager: Cache) {}

  async get(key: string) {
    return this.cacheManager.get(key);
  }

  async set(key: string, val: any, ttl: null | number = null) {
    if (ttl === null) await this.cacheManager.set(key, val);
    else await this.cacheManager.set(key, val, ttl);
  }

  async del(key: string) {
    return this.cacheManager.del(key);
  }

  async reset() {
    return this.cacheManager.reset();
  }

  // async keys() {
  //   return this.cacheManager.keys();
  // }
}

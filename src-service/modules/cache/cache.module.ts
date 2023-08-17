import { Module } from '@nestjs/common';
import type { RedisClientOptions } from 'redis';
import { CacheModule as CacheManagerModule } from '@nestjs/cache-manager';
import { CacheBaseService } from './base/cache-base.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheManagerModule.register<RedisClientOptions>({
      store: redisStore,
      isGlobal: true,
      // Store-specific configuration:
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: parseInt(process.env.CACHE_EXPIRED_TIME ?? '0'),
    }),
  ],
  providers: [CacheBaseService],
  exports: [CacheBaseService],
})
export class CacheModule {}

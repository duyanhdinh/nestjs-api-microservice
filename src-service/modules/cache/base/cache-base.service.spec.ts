import { Test, TestingModule } from '@nestjs/testing';
import { CacheBaseService } from './cache-base.service';

describe('CacheBaseService', () => {
  let service: CacheBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheBaseService],
    }).compile();

    service = module.get<CacheBaseService>(CacheBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

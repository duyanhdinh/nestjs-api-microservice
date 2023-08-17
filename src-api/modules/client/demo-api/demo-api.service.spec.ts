import { Test, TestingModule } from '@nestjs/testing';
import { DemoApiService } from './demo-api.service';

describe('DemoApiService', () => {
  let service: DemoApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoApiService],
    }).compile();

    service = module.get<DemoApiService>(DemoApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

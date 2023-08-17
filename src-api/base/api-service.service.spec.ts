import { Test, TestingModule } from '@nestjs/testing';
import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiServiceService],
    }).compile();

    service = module.get<ApiServiceService>(ApiServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

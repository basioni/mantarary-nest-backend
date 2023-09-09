import { Test, TestingModule } from '@nestjs/testing';
import { FitnessClassService } from './fitness-class.service';

describe('FitnessClassService', () => {
  let service: FitnessClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FitnessClassService],
    }).compile();

    service = module.get<FitnessClassService>(FitnessClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

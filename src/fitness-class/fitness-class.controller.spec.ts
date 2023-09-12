import { Test, TestingModule } from '@nestjs/testing';
import { FitnessClassController } from './fitness-class.controller';

describe('FitnessClassController', () => {
  let controller: FitnessClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FitnessClassController],
    }).compile();

    controller = module.get<FitnessClassController>(FitnessClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

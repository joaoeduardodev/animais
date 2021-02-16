import { Test, TestingModule } from '@nestjs/testing';
import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let provider: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalService],
    }).compile();

    provider = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

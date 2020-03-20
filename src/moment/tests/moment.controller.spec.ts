import { Test, TestingModule } from '@nestjs/testing';
import { MomentController } from '../moment.controller';
import { MomentService } from '../moment.service';

describe('Moment Controller', () => {
  let controller: MomentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MomentController],
      providers: [MomentService]
    }).compile();

    controller = module.get<MomentController>(MomentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

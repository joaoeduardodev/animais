import { Module } from '@nestjs/common';
import { AnimaisController } from './animais.controller';
import { AnimalService } from './shared/animal.service';

@Module({
    controllers: [AnimaisController],
    providers: [AnimalService]
})
export class AnimaisModule {}

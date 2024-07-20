import { Module } from '@nestjs/common';
import { NumbersModule } from '../numbers/numbers.module';
import { CalculatingController } from './calculating.controller';
import { NumbersService } from 'src/numbers/numbers.service';
import { CalculatingService } from './calculating.service';


@Module({
  imports: [NumbersModule.forFeature({value: 52}),
    NumbersModule.forFeatureAsync({value: 97})
  ],
  controllers: [CalculatingController],
  providers: [CalculatingService, NumbersService],
  exports: [CalculatingService]
})
export class CalculatingModule {}

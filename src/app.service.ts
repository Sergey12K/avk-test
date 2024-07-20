import { Inject, Injectable } from '@nestjs/common';
import { CalculatingService } from './calculating/calculating.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('BASE_NUMBER') private readonly baseNumber: number,
    @Inject('BASE_NUMBER_3') private readonly baseNumber3: number,
    private readonly calculatingService: CalculatingService
  ) {}

  async sum() {
    try {
      const baseNumber2 = await this.calculatingService.numberInit();
      const baseNumber4 = await this.calculatingService.asyncNumberInit()

      const sum1 = this.baseNumber + Number(baseNumber2)
      const sum2 = this.baseNumber3 + Number(baseNumber4)
      const envSum = Number(process.env.NUMBER1) + Number(process.env.NUMBER2)


      console.log(`${this.baseNumber} + ${Number(baseNumber2)} = ${sum1}`);
      console.log(`${this.baseNumber3} + ${Number(baseNumber4)} = ${sum2}`);
      console.log(`${process.env.NUMBER1} + ${process.env.NUMBER2} = ${envSum}`);

    } catch (err) {
      throw err
    }
  }
}


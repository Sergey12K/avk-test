import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CalculatingService {
  constructor(
    @Inject('BASE_NUMBER_2') private readonly baseNumber2: number,
    @Inject('BASE_NUMBER_4') private readonly baseNumber4: number,
  ) {}

  async numberInit(): Promise<number> {
    return Promise.resolve(this.baseNumber2);
  }
  async asyncNumberInit(): Promise<number> {
    return Promise.resolve(this.baseNumber4);
  }
}
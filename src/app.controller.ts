import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NumbersService } from './numbers/numbers.service';

@Controller('calculating')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sum')
  getSum() {
    return this.appService.sum();
  }
}

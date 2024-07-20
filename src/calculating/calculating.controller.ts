import { Controller, Get } from '@nestjs/common';
import { CalculatingService } from './calculating.service';

@Controller('calculating')
export class CalculatingController {
  constructor(private readonly calculatingService: CalculatingService) {}

  @Get('calc')
  getSum() {}
}

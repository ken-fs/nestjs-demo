import { Controller, Get, Query } from '@nestjs/common';
import { RangeService } from './range.service';

@Controller('range')
export class RangeController {
  constructor(private readonly rangeService: RangeService) {}

  @Get('getRange')
  getRange(@Query('data') data: string | number) {
    return this.rangeService.getRange(data);
  }
}

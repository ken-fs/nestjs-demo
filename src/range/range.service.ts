import { Injectable } from '@nestjs/common';

@Injectable()
export class RangeService {
  getRange(data: string | number) {
    let result: number[] = [];
    if (typeof data === 'number') {
      result = Array.from({ length: data }, (_, i) => i + 1);
    }
    return {
      code: 200,
      message: 'success',
      data: result,
    };
  }
}

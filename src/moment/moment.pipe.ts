import { Injectable, PipeTransform, BadRequestException, Logger } from '@nestjs/common';
import IMomentsRequest from 'src/reqeusts/MomentsRequest';

@Injectable()
export class MomentPipe implements PipeTransform {
  transform(value: any) {
    const request: IMomentsRequest = {
      page: parseInt(value.page),
      size: parseInt(value.size)
    };
    return request;
  }
}

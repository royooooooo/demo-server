import { Controller, Get, Query } from '@nestjs/common';
import IMomentsRequest from 'src/reqeusts/MomentsRequest';
import { MomentService } from './moment.service';

@Controller('moment')
export class MomentController {
    constructor(private readonly momentService: MomentService) { }

    @Get()
    getMoments(@Query() request: IMomentsRequest) {
        return JSON.stringify(this.momentService.getMoments(request))
    }
}

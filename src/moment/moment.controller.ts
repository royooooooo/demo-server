import { Controller, Get, Query, Param } from '@nestjs/common';
import IMomentsRequest from 'src/reqeusts/MomentsRequest';
import { MomentService } from './moment.service';
import { MomentPipe } from './moment.pipe';

@Controller('moment')
export class MomentController {
    constructor(private readonly momentService: MomentService) { }

    @Get()
    getMoments(@Query(new MomentPipe()) request: IMomentsRequest) {
        return JSON.stringify(this.momentService.getMoments(request))
    }

    @Get(":id")
    getMoment(@Param('id') id: string) {
        return JSON.stringify(this.momentService.getMomentById(id));
    }
}

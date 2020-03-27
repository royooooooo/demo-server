import { Body, Controller, Get, Param, Post, Query, HttpCode } from '@nestjs/common';
import IMomentsRequest from 'src/reqeusts/MomentsRequest';
import { MomentPipe } from './moment.pipe';
import { MomentService } from './moment.service';
import IMomentCreateRequest from 'src/reqeusts/MomentCreateRequest';

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

    @Post()
    @HttpCode(201)
    createMoment(@Body() createRequest: IMomentCreateRequest) {
        this.momentService.createMoment(createRequest);
    }
}

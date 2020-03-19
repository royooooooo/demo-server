import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MomentModule } from './moment/moment.module';

@Module({
  imports: [MomentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

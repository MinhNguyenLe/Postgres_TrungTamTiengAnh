import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/NonModule/entity/Course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
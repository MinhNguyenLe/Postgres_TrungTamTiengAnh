import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEntity } from 'src/NonModule/entity/Class.entity';
import { CourseEntity } from 'src/NonModule/entity/Course.entity';
import { ScheduleEntity } from 'src/NonModule/entity/Schedule.entity';
import { StudentClassEntity } from 'src/NonModule/entity/StudentClass.entity';
import { TeacherClassEntity } from 'src/NonModule/entity/TeacherClass.entity';
import { StudentEntity } from 'src/NonModule/entity/Student.entity';
import { TeacherEntity } from 'src/NonModule/entity/Teacher.entity';
import { UserEntity } from 'src/NonModule/entity/User.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClassEntity]),
    TypeOrmModule.forFeature([ScheduleEntity]),
    TypeOrmModule.forFeature([CourseEntity]),
    TypeOrmModule.forFeature([StudentClassEntity]),
    TypeOrmModule.forFeature([StudentEntity]),
    TypeOrmModule.forFeature([TeacherClassEntity]),
    TypeOrmModule.forFeature([TeacherEntity]),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [ClassesService],
  controllers: [ClassesController],
})
export class ClassesModule {}

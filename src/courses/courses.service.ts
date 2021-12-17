import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassEntity } from 'src/NonModule/entity/Class.entity';
import { CourseEntity } from 'src/NonModule/entity/Course.entity';
import {
  course,
  courseEdit,
  newCourse,
} from 'src/NonModule/interface/course.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private coursesRepository: Repository<CourseEntity>,
    @InjectRepository(ClassEntity)
    private classesRepository: Repository<ClassEntity>,
  ) {}

  async createCourse(content: newCourse): Promise<course[]> {
    await this.coursesRepository.save(content);
    return this.coursesRepository.find({ relations: ['classes'] });
  }

  async editCourse(content: courseEdit): Promise<course[]> {
    await this.coursesRepository.update(
      { id: content.id },
      {
        name: content.name,
        information: content.information,
        members: content.members,
        tuition: content.tuition,
        timeBegin: content.timeBegin,
        timeEnd: content.timeEnd,
        level: content.level,
        docs: content.docs,
      },
    );
    return this.coursesRepository.find({ relations: ['classes'] });
  }

  async getById(id: number): Promise<course> {
    return this.coursesRepository.findOne({
      where: { id },
      relations: ['classes'],
    });
  }

  async getAll(): Promise<course[]> {
    return this.coursesRepository.find({ relations: ['classes','classes.timetable','class.studentClass','class.teacherClass','class.noti'] });
  }

  async deleteById(id: number): Promise<course[]> {
    const dataDelete = await this.coursesRepository.findOne({
      where: { id },
      relations: ['classes'],
    });

    for (const item of [...dataDelete.classes]) {
      await this.classesRepository.delete({
        id: item.id,
      });
    }

    await this.coursesRepository.delete({ id });
    return this.coursesRepository.find({ relations: ['classes'] });
  }

  async clearRepo(): Promise<course[]> {
    await this.coursesRepository.clear();
    return this.coursesRepository.find();
  }
}

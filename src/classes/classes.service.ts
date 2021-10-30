import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import customStatusCode from 'src/NonModule/customStatusCode';
import { ClassEntity } from 'src/NonModule/entity/Class.entity';
import { CourseEntity } from 'src/NonModule/entity/Course.entity';
import {
  classes,
  classesEdit,
  newClasses,
} from 'src/NonModule/interface/class.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(ClassEntity)
    private classesRepository: Repository<ClassEntity>,
    @InjectRepository(CourseEntity)
    private coursesRepository: Repository<CourseEntity>,
  ) {}

  async createClass(content: newClasses): Promise<classes[]> {
    if (!content.idCourse)
      customStatusCode('INTERNAL_SERVER_ERROR', 'id of course must require');

    const course = await this.coursesRepository.findOne({
      where: { id: content.idCourse },
    });
    const newClass = await this.classesRepository.save({
      name: content.name,
      idNoti: content.idNoti,
      courses: course,
      idRoom: content.idRoom,
    });

    // const arr = course.classes ? [...course.classes] : [];

    // arr.push(newClass);

    // await this.coursesRepository.update(
    //   {
    //     id: content.idCourse,
    //   },
    //   {
    //     classes: arr,
    //   },
    // );

    return this.classesRepository.find();
  }

  async editClass(content: classesEdit): Promise<classes> {
    await this.classesRepository.update(
      { id: content.id },
      {
        name: content.name,
        idRoom: content.idRoom,
      },
    );
    return this.classesRepository.findOne({ where: { id: content.id } });
  }

  async deleteById(id: number): Promise<classes[]> {
    await this.classesRepository.delete({ id });
    return this.classesRepository.find();
  }

  async getById(id: number): Promise<classes[]> {
    return this.classesRepository.find({ where: { id } });
  }

  async getAll(): Promise<classes[]> {
    return this.classesRepository.find();
  }

  async clearRepo(): Promise<classes[]> {
    await this.classesRepository.clear();
    return await this.classesRepository.find();
  }
}

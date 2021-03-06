import { schedule } from './schedule.interface';
import { student } from './student.interface';
import { teacher } from './teacher.interface';

export interface user {
  id: number;
  userName: string;
  password: string;
  email: string;
  lastName: string;
  firstName: string;
  placeBirth: string;
  dateBirth: string;
  phoneNumber: string;
  address: string;
  gender: number;
  nameRole: string;
  permission: number;
  createdAt: Date;
}

export interface register {
  userName: string;
  password: string;
  email: string;
  lastName: string;
  firstName: string;
  placeBirth: string;
  dateBirth: string;
  phoneNumber: string;
  address: string;
  gender: number;
  nameRole: string;
  permission: number;
}

export interface editStudent {
  id:number,
  lastName: string;
  firstName: string;
  placeBirth: string;
  dateBirth: string;
  phoneNumber: string;
  address: string;
  level: string;
  education:string
}

export interface editTeacher {
  id:number,
  lastName: string;
  firstName: string;
  placeBirth: string;
  dateBirth: string;
  phoneNumber: string;
  address: string;
  level: string;
  certificate:string
}


export interface registerTeacher {
  userName: string;
  password: string;
  email: string;
  nameRole: string;
  permission: number;
}

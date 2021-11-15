import { schedule } from './schedule.interface';

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
  schedule: schedule;
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

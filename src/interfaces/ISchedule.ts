import ScheduleModel from '../models/ScheduleModel';

export interface IScheduleInput {
  email: string;
}

export interface ISchedule {
  id: number;
  email: string;
  scheduleDateTime: Date;
}

export interface IScheduleCreated {
  message: string;
  scheduleCreated: ISchedule;
}

export interface IScheduleResponse {
  message: string;
  scheduleCreated: ScheduleModel;
}

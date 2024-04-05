export interface IScheduleInput {
  email: string;
}

export interface ISchedule {
  id: number;
  email: string;
  scheduleDateTime: Date;
}

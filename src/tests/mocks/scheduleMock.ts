import { ISchedule, IScheduleCreated } from "../../interfaces/ISchedule";

export const allSchedulesMock: ISchedule[] = [
  {
    "id": 1,
    "email": "exemple_123@hotmail.com",
    "scheduleDateTime": new Date()
  },
  {
    "id": 2,
    "email": "pedro-789@gmail.com",
    "scheduleDateTime": new Date()
  },
  {
    "id": 3,
    "email": "maria_456@hotmail.com",
    "scheduleDateTime": new Date()
  }
]

export const createdScheduleMock: IScheduleCreated = {
  "message": "Service scheduled successfully",
  "scheduleCreated": {
    "scheduleDateTime": new Date('2024-04-07T18:33:14.658Z'),
    "id": 1,
    "email": "maria_456@hotmail.com"
  }
}

export const messageMock = {
  message: 'Scheduling canceled successfully'
}

export const scheduleMock = {
  "id": 1,
  "email": "exemple_123@hotmail.com",
  "scheduleDateTime": new Date()
}

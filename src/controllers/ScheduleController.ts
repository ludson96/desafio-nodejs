import { Request, Response } from 'express';
import ScheduleService from '../services/ScheduleService';
import { IScheduleInput, ISchedule } from '../interfaces/ISchedule';

export default class ScheduleController {
  constructor(private _scheduleService = new ScheduleService()) {
  }

  public getAllSchedule = async (_req: Request, res: Response): Promise<Response<ISchedule>> => {
    const allSchedules = await this._scheduleService.getAllSchedule();
    return res.status(200).json(allSchedules);
  };

  public createSchedule = async (req: Request, res: Response): Promise<Response<ISchedule>> => {
    const { email }: IScheduleInput = req.body;
    const { status, message } = await this._scheduleService.createSchedule(email);
    return res.status(status).json(message);
  };

  public deleteSchedule = async (req: Request, res: Response): Promise<Response<ISchedule>> => {
    const { id } = req.params;
    const { status, message } = await this._scheduleService.deleteSchedule(Number(id));
    return res.status(status).json(message);
  };
}

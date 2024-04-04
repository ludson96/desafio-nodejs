import { Request, Response } from 'express';
import ScheduleService from '../services/ScheduleService';

export default class ScheduleController {
  constructor(private _scheduleService = new ScheduleService()) {
  }

  public getAllSchedule = async (req: Request, res: Response): Promise<object> => {
    try {
      const schedule = await this._scheduleService.getAllSchedule();
      return res.status(200).json(schedule);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };
}

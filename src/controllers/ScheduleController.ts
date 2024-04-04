import { Request, Response } from 'express';
import ScheduleService from '../services/ScheduleService';

export default class ScheduleController {
  constructor(private _scheduleService = new ScheduleService()) {
  }

  public getAllSchedule = async (_req: Request, res: Response): Promise<object> => {
    try {
      const schedule = await this._scheduleService.getAllSchedule();
      return res.status(200).json(schedule);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public createSchedule = async (req: Request, res: Response): Promise<object> => {
    try {
      const { email } = req.body;
      const schedule = await this._scheduleService.createSchedule(email);
      return res.status(201).json(schedule);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  public deleteSchedule = async (req: Request, res: Response): Promise<object> => {
    try {
      const { id } = req.params;
      const schedule = await this._scheduleService.deleteSchedule(Number(id));
      return res.status(200).json(schedule);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };
}

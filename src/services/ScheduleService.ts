import { StatusCodes } from 'http-status-codes';
import HttpError from '../utils/HttpError';
import ScheduleModel from '../models/ScheduleModel';

export default class ScheduleService {
  constructor(private _scheduleModel = ScheduleModel) {}

  public async getAllSchedule() {
    try {
      return await this._scheduleModel.findAll();
    } catch (error) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
    }
  }

  public async createSchedule(email: string) {
    try {
      const newSchedule = await this._scheduleModel.create({ email });
      const message = { message: 'Service scheduled successfully' };
      return { status: StatusCodes.CREATED, message: { message, newSchedule } };
    } catch (error) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
    }
  }

  public async deleteSchedule(id: number) {
    try {
      const schedule = await this._scheduleModel.findByPk(id);
      if (!schedule) {
        return { status: StatusCodes.NOT_FOUND, message: `Schedule not found with ID: ${id}` };
      }

      await this._scheduleModel.destroy({ where: { id } });
      const message = { message: 'Schedule deleted successfully' };
      return { status: StatusCodes.OK, message }; // escolhi o status 200 para enviar um mensagem ao inves do 204
    } catch (error) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, (error as Error).message);
    }
  }
}

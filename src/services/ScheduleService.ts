import ScheduleModel from '../models/ScheduleModel';

export default class ScheduleService {
  constructor(public scheduleModel = ScheduleModel) {}

  public async getAllSchedule() {
    return this.scheduleModel.findAll();
  }

  public async createSchedule(email: string) {
    return this.scheduleModel.create({ email });
  }

  public async deleteSchedule(id: number) {
    return this.scheduleModel.destroy({ where: { id } });
  }
}

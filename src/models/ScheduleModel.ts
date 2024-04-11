import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class ScheduleModel extends Model {
  declare id: number;
  declare email: string;
  declare scheduleDateTime: Date;
}

ScheduleModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scheduleDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  underscored: false,
  sequelize: db,
  modelName: 'schedules',
  timestamps: false,
});

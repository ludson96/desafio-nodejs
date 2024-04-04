import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Schedule extends Model {
  declare id: number;
  declare email: string;
  declare scheduleDateTime: Date;
}

Schedule.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scheduleDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'schedules',
  timestamps: true,
});

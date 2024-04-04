import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(
  {
    database: `${process.env.MYSQL_DB_NAME || 'schedule'}`,
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
    models: [`${__dirname}/models`],
  },
);

export default sequelize;

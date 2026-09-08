import 'dotenv/config';
import { Options } from 'sequelize';

const isProduction = process.env.NODE_ENV === 'production';
const useSqlite = process.env.DB_DIALECT === 'sqlite' || (isProduction && !process.env.MYSQL_HOST);

const config: Options = useSqlite
  ? {
      dialect: 'sqlite',
      storage: process.env.SQLITE_STORAGE || './database.sqlite',
      logging: false,
    }
  : {
      username: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DB_NAME || 'schedule',
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      dialect: 'mysql',
      dialectOptions: {
        timezone: 'Z',
      },
      logging: false,
    };

module.exports = config;


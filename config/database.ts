import 'dotenv/config';

type Environment = 'production' | 'development' | 'test';

const environment = process.env.NODE_ENV || 'test';

const suffix = {
  production: '-prod',
  development: '-dev',
  test: '-test',
};

const databaseSuffix = suffix[environment as Environment] || suffix.test;

const options = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: `${process.env.MYSQL_DB_NAME || 'testedb'}${databaseSuffix}`,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export default {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};

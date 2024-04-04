import mysql, { ConnectionOptions } from 'mysql2/promise';
import index from '../src/index';
import 'dotenv/config';

const connection: ConnectionOptions = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: (process.env.MYSQL_PORT ?? 3306) as number,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.DATABASE || 'db',
};

index.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

export default mysql.createConnection(connection);

import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { Attendance } from './attendance/attendance.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [User, Attendance],
  migrations: ['./src/migrations/*.ts'],
});
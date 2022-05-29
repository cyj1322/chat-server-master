import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig() {
    return {
      dialect: 'postgres' as Dialect,
      // host: process.env.DATABASE_HOST,
      // port: +process.env.DATABASE_PORT,
      // username: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_DATABASE,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'chat',
      logging: false,
    };
  }

  // get jwtConfig() {
  //   return { privateKey: config.jwtPrivateKey };
  // }
}

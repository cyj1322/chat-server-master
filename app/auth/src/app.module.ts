import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from '../../lib/db/models/user.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LibModule } from '../../lib/lib.module';

@Module({
  imports: [
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'chat',
    //   models: [User],
    // }),
    UserModule,
    LibModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../lib/db/database.module';
import { UserController } from './user.controller';
import { usersProviders } from './user.providers';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}

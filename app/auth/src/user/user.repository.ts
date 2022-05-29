import { User } from '../../../lib/db/models/user.model';

// @EntityRepository(User)
// export class BoardRepository extends Repository<User> {
//   async createUser(createUserDto: CreateUserDto): Promise<User> {
//     const { title, description } = createUserDto;
//     const board = this.create({
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//     });

//     await this.save(board); // db에 만들어진 객체를 저장
//     return board;
//   }
// }

import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly user: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.user.create({
      ...createUserDto,
    });

    return result;
    // .create({
    //   title,
    //   description,
    //   status: BoardStatus.PUBLIC,
    // });

    // await this.save(board); // db에 만들어진 객체를 저장
    // return board;
  }

  // async createUser(): Promise<User> {
  //   return this.catsRepository.findAll<Cat>();
  // }
}

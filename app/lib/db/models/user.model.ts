import {
  Column,
  DataType,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.fn('gen_random_uuid'),
    comment: '사용자 ID',
  })
  userId: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '로그인 ID',
  })
  id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: '로그인 Password',
  })
  password: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '이름',
  })
  firstName: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '성',
  })
  lastName: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '별명',
  })
  nickName: string;
}

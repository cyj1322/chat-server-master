import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  readonly id: string;

  @ApiProperty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  readonly nickName: string;

  // @ApiProperty()
  // @IsString()
  // @MinLength(6)
  // readonly password: string;

  // @ApiProperty()
  // @IsString()
  // readonly firstName: string;

  // @ApiProperty()
  // @IsString()
  // readonly lastName: string;

  // @ApiProperty()
  // @IsOptional()
  // @IsEnum(Gender)
  // readonly gender: Gender;

  // @ApiProperty()
  // @IsOptional()
  // @IsISO8601()
  // readonly birthday: string;
}

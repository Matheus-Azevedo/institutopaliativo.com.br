import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

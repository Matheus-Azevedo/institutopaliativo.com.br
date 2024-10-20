import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    type: String,
    description: 'Email do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'Nome do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly nome: string;

  @ApiProperty({
    type: String,
    description: 'Email do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly senha: string;

  @ApiProperty({
    type: String,
    description: 'Role do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HeathProfessionalRole, UserRole } from '../enums/users.enum';

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
    enum: UserRole,
    description: 'Role do usuário',
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  readonly role: UserRole;

  @ApiProperty({
    enum: HeathProfessionalRole,
    description: 'Role do profissional de saúde',
    required: false,
  })
  @IsOptional()
  @IsEnum(HeathProfessionalRole)
  readonly healthProfessionalRole?: HeathProfessionalRole;
}

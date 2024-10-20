import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({
    type: String,
    description: 'ID do usuário',
    required: true,
  })
  readonly id: string;

  @ApiProperty({
    type: String,
    description: 'Nome do usuário',
    required: true,
  })
  readonly nome: string;

  @ApiProperty({
    type: String,
    description: 'Email do usuário',
    required: true,
  })
  readonly email: string;

  @ApiProperty({
    type: String,
    description: 'Senha do usuário',
    required: false,
  })
  readonly senha?: string;

  @ApiProperty({
    type: String,
    description: 'Role do usuário',
    required: true,
  })
  readonly role: string;
}

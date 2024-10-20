import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { HeathProfessionalRole, UserRole } from '../enums/users.enum';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  nome: string;

  @Column
  email: string;

  @Column
  senha: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserRole),
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM,
    values: Object.values(HeathProfessionalRole),
    allowNull: true,
  })
  healthProfessionalRole?: HeathProfessionalRole;
}

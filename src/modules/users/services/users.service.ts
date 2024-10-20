import {
  Injectable,
  Inject,
  NotFoundException,
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '../entities/user.entity'; // Seu modelo de usuário
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { GetUserDto } from '../dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async create(userData: CreateUserDto): Promise<GetUserDto> {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(userData.senha, saltRounds);
    const newUSerData = {
      ...userData,
      senha: hashedPassword,
    };
    const user = await this.userRepository.findOne({
      where: { email: newUSerData.email },
    });
    if (user) {
      throw new ConflictException('Usuário já cadastrado');
    }
    const newUser = await this.userRepository.create(newUSerData);
    if (!newUser) {
      throw new UnprocessableEntityException('Erro ao criar usuário');
    }
    return newUser;
  }

  async findAll(): Promise<GetUserDto[]> {
    const allUsers = await this.userRepository.findAll();
    if (!allUsers) {
      throw new UnprocessableEntityException('Erro ao buscar usuários');
    }
    const allUsersWithoutPassword = allUsers.map((user) => {
      const userWithoutPassword = {
        id: user.id,
        nome: user.nome,
        email: user.email,
        role: user.role,
      };
      return userWithoutPassword;
    });
    return allUsersWithoutPassword;
  }

  async findByEmail(email: string): Promise<GetUserDto | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async findByPk(id: string): Promise<GetUserDto | null> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update(
    id: string,
    updateData: UpdateUserDto,
  ): Promise<GetUserDto | null> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const userUpdated = await user.update(updateData);
    if (!userUpdated) {
      throw new UnprocessableEntityException('Erro ao atualizar usuário');
    }
    return userUpdated;
  }

  async destroy(id: string): Promise<void> {
    const user = await this.findByPk(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const userRemoved = await this.userRepository.destroy({ where: { id } });
    if (!userRemoved) {
      throw new UnprocessableEntityException('Erro ao excluir usuário');
    }
  }
}

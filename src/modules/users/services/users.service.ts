import { Injectable, Inject } from '@nestjs/common';
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
    return await this.userRepository.create(newUSerData);
  }

  async findAll(): Promise<GetUserDto[]> {
    return await this.userRepository.findAll<User>();
  }

  async findByPk(id: string): Promise<GetUserDto | null> {
    return await this.userRepository.findByPk(id);
  }

  async update(
    id: string,
    updateData: UpdateUserDto,
  ): Promise<GetUserDto | null> {
    const user = await this.userRepository.findByPk(id);
    if (user) {
      await user.update(updateData);
      return user;
    }
    return null;
  }

  async destroy(id: string): Promise<void> {
    const user = await this.findByPk(id);
    if (user) {
      await this.userRepository.destroy({ where: { id } });
    }
  }
}

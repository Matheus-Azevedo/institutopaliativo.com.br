import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    console.log(username);
    const user = await this.usersService.findByEmail(username);
    const isPasswordValid = await bcrypt.compare(password, user.senha);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const payload = {
      username: user.nome,
      role: user.healthProfessionalRole
        ? user.healthProfessionalRole
        : user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

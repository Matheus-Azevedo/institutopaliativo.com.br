import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // Sem roles, qualquer um autenticado pode acessar
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException(
        'Acesso negado, realize o login novamente',
      );
    }

    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      const payload = await this.jwtService.verifyAsync(token, { secret });

      if (!requiredRoles.includes(payload.role)) {
        throw new ForbiddenException('Acesso negado, você não tem permissão');
      }

      request['user'] = payload; // Salva o payload no request
      return true;
    } catch (error) {
      throw new UnauthorizedException(
        `Acesso negado: ${error.message}, realize o login novamente`,
      );
    }
  }
}

import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { DatabaseModule } from 'src/infra/db/database.module';
import { userProvider } from './repositories/users.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, JwtModule],
  controllers: [UsersController],
  providers: [UsersService, ...userProvider],
  exports: [UsersService],
})
export class UsersModule {}

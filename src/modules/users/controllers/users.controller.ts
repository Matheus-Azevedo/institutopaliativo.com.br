import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from '../dto/get-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created',
    type: GetUserDto,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto): Promise<GetUserDto> {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return all users',
    type: GetUserDto,
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<GetUserDto[]> {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Find user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return a user by id',
    type: GetUserDto,
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findByPk(@Param('id') id: string): Promise<GetUserDto> {
    return this.usersService.findByPk(id);
  }

  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return the updated user',
    type: GetUserDto,
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<GetUserDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The user has been successfully deleted',
    type: undefined,
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: string): Promise<void> {
    return this.usersService.destroy(id);
  }
}

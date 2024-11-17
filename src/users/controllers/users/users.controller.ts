import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return ['user1', 'user2'];
  }

  @Get(':id')
  getUser() {
    return 'One user';
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return userData;
  }
}

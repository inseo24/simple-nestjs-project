import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { CreateUserDto } from 'src/dto/create.user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getName(@Query('email') email: string): Promise<string> {
    return await this.userService.getName(email);
  }

  @Post()
  async create(@Body() request: CreateUserDto): Promise<number> {
    console.log(`Name: ${request.name}, Email: ${request.email}`);
    const createdUserId = await this.userService.create(
      request.name,
      request.email,
    );
    return createdUserId;
  }
}

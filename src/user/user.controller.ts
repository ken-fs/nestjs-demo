import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUser')
  getUser() {
    return this.userService.getUser();
  }

  @Post('addUser')
  addUser() {
    return this.userService.addUser();
  }
}

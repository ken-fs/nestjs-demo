import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { ConfigService } from '@nestjs/config'
import { ConfigEnum } from 'src/enum/config.enum'
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getUser')
  getUser() {
    const db = this.configService.get<string>(ConfigEnum.DB_HOST)
    const db2 = this.configService.get<string>('DB_HOST')
    const url = this.configService.get<string>('DB_URL')
    console.log('db', db, 'db2', db2, 'url', url)
    return this.userService.getUser()
  }

  @Post('addUser')
  addUser() {
    return this.userService.addUser()
  }
}

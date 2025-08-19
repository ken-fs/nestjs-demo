import { Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { ConfigService } from '@nestjs/config'
import { ConfigEnum } from 'src/enum/config.enum'
import config from 'config'
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getUser')
  getUser() {
    const db = this.configService.get<string>(ConfigEnum.DB_HOST)
    const db2 = this.configService.get<string>('DB_HOST') // 使用nestjs/config获取环境配置文件
    const db3 = config.get<string>('DB_URL') // 使用config模块获取环境配置文件
    console.log('db', db, 'db2', db2, 'db3', db3)
    return this.userService.getUser()
  }

  @Post('addUser')
  addUser() {
    return this.userService.addUser()
  }
}


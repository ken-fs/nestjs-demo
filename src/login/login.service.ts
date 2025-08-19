import { Injectable } from '@nestjs/common'
import { CreateLoginDto } from './dto/create-login.dto'
import { UpdateLoginDto } from './dto/update-login.dto'

@Injectable()
export class LoginService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login'
  }

  findAll() {
    return `This action returns all login`
  }

  findOne(id: number) {
    return `This action returns a #${id} login`
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`
  }

  remove(id: number) {
    return `This action removes a #${id} login`
  }
}

import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUser() {
    return {
      code: 200,
      message: 'success',
      data: {
        user: 'user',
      },
    }
  }

  addUser() {
    return {
      code: 200,
      message: 'success',
      data: {
        user: 'user',
      },
    }
  }
}

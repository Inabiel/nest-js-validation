import { Injectable } from '@nestjs/common';
import { createUserDTO } from './user.dto';

let userArr: createUserDTO[] = [];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  create(userDto: createUserDTO) {
    return userArr.push(userDto);
  }
  get() {
    return userArr;
  }
}

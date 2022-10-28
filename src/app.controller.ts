import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { createUserDTO } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() userDto: createUserDTO, @Res() res: Response) {
    this.appService.create(userDto);
    res
      .status(HttpStatus.CREATED)
      .json({ msg: 'creating user successfully' })
      .send();
  }

  @Get('/users')
  getUsers() {
    return this.appService.get();
  }
}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LoginController } from './login/login.controller';
import { SignupController } from './signup/signup.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, LoginController, SignupController],
  providers: [AppService],
})
export class AppModule {}

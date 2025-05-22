/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LoginController } from './login/login.controller';
import { SignupController } from './signup/signup.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, LoginController, SignupController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

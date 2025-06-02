/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LoginController } from './login/login.controller';
import { SignupController } from './signup/signup.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [EmployeeModule, CategoryModule, AddressModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, LoginController, SignupController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

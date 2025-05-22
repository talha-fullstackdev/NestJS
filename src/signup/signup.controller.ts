/* eslint-disable prettier/prettier */
import { Controller ,Get } from '@nestjs/common';

@Controller('signup')
export class SignupController {
     @Get()
     getSignup(){
        return "signup page"
     }
}

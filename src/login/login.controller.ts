/* eslint-disable prettier/prettier */
import { Controller,Get} from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    getlogin(){
        return "welcome to login page"
    }
}

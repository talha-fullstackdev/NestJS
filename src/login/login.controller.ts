/* eslint-disable prettier/prettier */
import { Controller,Get,UseGuards} from '@nestjs/common';
import { LoginGuard } from 'src/guards/login/login.guard';
@Controller('login')
export class LoginController {
    @Get()
    @UseGuards(LoginGuard)
    getlogin(){
        return "login succesfull"
    }
}

/* eslint-disable prettier/prettier */
// /////////// in controller we handle http request
import { Controller,Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    @Get()
    getResponse(){
        return "hello response received from customer response"
    }
}

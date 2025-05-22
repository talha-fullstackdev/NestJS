/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployee(){
        return "hello talha from employee module"
    }
}

/* eslint-disable prettier/prettier */
import { Controller,Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
    @Get()
    getAllStudents(){
        return this.studentService.getALLStudents()
    }
    @Get(":id") // id route
    getOne(@Param("id") id:string){ // passing id like this here 
        return this.studentService.getStudentById(Number(id))
    }
}

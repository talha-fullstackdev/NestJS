/* eslint-disable prettier/prettier */
import { Controller,Get, Param, Post ,Body, Put,Patch, Delete} from '@nestjs/common';
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
    @Post()
    create(@Body() body:{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}){
        return this.studentService.createStudent(body)
    }
    @Put(":id")
    update(@Param("id") id:string, @Body() body :{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}){
           return this.studentService.updateStudent(Number(id),body)
    }
    @Patch(":id")
    patchStudent(@Param("id") id:string, @Body() body :{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}){
           return this.studentService.patchStudent(Number(id),body)
    }
    @Delete(":id")
    deleteStudent(@Param("id") id:string){
        return this.studentService.deleteStudent(Number(id)) 
    }
}

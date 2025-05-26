/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        {rollnumber:101,name:"Talha Nawaz",age:25},
        {rollnumber:102,name:"Uzair Ansari",age:24},
        {rollnumber:103,name:"Daud Ahmad",age:23},
        {rollnumber:104,name:"Shameel Majeed",age:22},
        {rollnumber:105,name:"Usman Liaquat",age:24},
    ]
    /////////////// get http request methods
    getALLStudents(){
        return this.students
    }
    getStudentById(id:number){
      const student =  this.students.find((student)=>student.rollnumber===id)
      if(!student){
         throw new NotFoundException("no student found with this rollnumber")
        
      }
      return student
    }
    //////////////post http method
    createStudent(data:{name:string;age:number}){
        const newStudent = {
            rollnumber:Date.now(),
            ...data // extract every thing from data that is name and age and store in it newstudent object
        }
        this.students.push(newStudent)
        return {msg:"student added succesfully",newStudent}
    }
}

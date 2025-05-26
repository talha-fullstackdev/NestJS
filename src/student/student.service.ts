/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        {rollnumber:101,name:"Talha Nawaz",age:25},
        {rollnumber:102,name:"Uzair Ansari",age:24},
        {rollnumber:103,name:"Daud Ahmad",age:23},
        {rollnumber:104,name:"Shameel Majeed",age:22},
        {rollnumber:105,name:"Usman Liaquat",age:24},
    ]
    getStudent(){
        return this.students
    }
}

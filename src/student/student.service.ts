/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private  students = [
  {
    rollnumber: 101,
    name: "Talha Nawaz",
    age: 25,
    gender: "Male",
    marks: 88,
    contact: { self: "03001234567", parent: "03111234567" },
    section: "A",
    address: { current: "Lahore", permanent: "Multan" }
  },
  {
    rollnumber: 102,
    name: "Uzair Ansari",
    age: 24,
    gender: "Male",
    marks: 75,
    contact: { self: "03011234567", parent: "03121234567" },
    section: "A",
    address: { current: "Karachi", permanent: "Sukkur" }
  },
  {
    rollnumber: 103,
    name: "Daud Ahmad",
    age: 23,
    gender: "Male",
    marks: 90,
    contact: { self: "03021234567", parent: "03131234567" },
    section: "B",
    address: { current: "Islamabad", permanent: "Rawalpindi" }
  },
  {
    rollnumber: 104,
    name: "Shameel Majeed",
    age: 22,
    gender: "Male",
    marks: 82,
    contact: { self: "03031234567", parent: "03141234567" },
    section: "C",
    address: { current: "Faisalabad", permanent: "Sialkot" }
  },
  {
    rollnumber: 105,
    name: "Usman Liaquat",
    age: 24,
    gender: "Male",
    marks: 77,
    contact: { self: "03041234567", parent: "03151234567" },
    section: "B",
    address: { current: "Gujranwala", permanent: "Bahawalpur" }
  },
  {
    rollnumber: 106,
    name: "Areeba Khan",
    age: 21,
    gender: "Female",
    marks: 89,
    contact: { self: "03051234567", parent: "03161234567" },
    section: "A",
    address: { current: "Lahore", permanent: "Sheikhupura" }
  },
  {
    rollnumber: 107,
    name: "Hassan Javed",
    age: 23,
    gender: "Male",
    marks: 68,
    contact: { self: "03061234567", parent: "03171234567" },
    section: "C",
    address: { current: "Quetta", permanent: "Zhob" }
  },
  {
    rollnumber: 108,
    name: "Iqra Yousaf",
    age: 22,
    gender: "Female",
    marks: 93,
    contact: { self: "03071234567", parent: "03181234567" },
    section: "A",
    address: { current: "Peshawar", permanent: "Swat" }
  },
  {
    rollnumber: 109,
    name: "Ali Raza",
    age: 24,
    gender: "Male",
    marks: 85,
    contact: { self: "03081234567", parent: "03191234567" },
    section: "B",
    address: { current: "Multan", permanent: "Dera Ghazi Khan" }
  },
  {
    rollnumber: 110,
    name: "Fatima Tariq",
    age: 21,
    gender: "Female",
    marks: 91,
    contact: { self: "03091234567", parent: "03201234567" },
    section: "A",
    address: { current: "Hyderabad", permanent: "Nawabshah" }
  },
  {
    rollnumber: 111,
    name: "Sana Sheikh",
    age: 20,
    gender: "Female",
    marks: 87,
    contact: { self: "03101234567", parent: "03211234567" },
    section: "C",
    address: { current: "Larkana", permanent: "Khairpur" }
  },
  {
    rollnumber: 112,
    name: "Bilal Aslam",
    age: 23,
    gender: "Male",
    marks: 74,
    contact: { self: "03111234567", parent: "03221234567" },
    section: "B",
    address: { current: "Kasur", permanent: "Okara" }
  },
  {
    rollnumber: 113,
    name: "Zoya Anwar",
    age: 22,
    gender: "Female",
    marks: 92,
    contact: { self: "03121234567", parent: "03231234567" },
    section: "A",
    address: { current: "Mardan", permanent: "Charsadda" }
  },
  {
    rollnumber: 114,
    name: "Hamza Shahid",
    age: 24,
    gender: "Male",
    marks: 70,
    contact: { self: "03131234567", parent: "03241234567" },
    section: "C",
    address: { current: "Sargodha", permanent: "Bhakkar" }
  },
  {
    rollnumber: 115,
    name: "Rabia Waheed",
    age: 21,
    gender: "Female",
    marks: 95,
    contact: { self: "03141234567", parent: "03251234567" },
    section: "B",
    address: { current: "Attock", permanent: "Jhelum" }
  },
  {
    rollnumber: 116,
    name: "Ahmed Saeed",
    age: 23,
    gender: "Male",
    marks: 79,
    contact: { self: "03151234567", parent: "03261234567" },
    section: "A",
    address: { current: "Rahim Yar Khan", permanent: "Lodhran" }
  },
  {
    rollnumber: 117,
    name: "Hiba Farooq",
    age: 20,
    gender: "Female",
    marks: 88,
    contact: { self: "03161234567", parent: "03271234567" },
    section: "C",
    address: { current: "Toba Tek Singh", permanent: "Mianwali" }
  },
  {
    rollnumber: 118,
    name: "Imran Qureshi",
    age: 24,
    gender: "Male",
    marks: 83,
    contact: { self: "03171234567", parent: "03281234567" },
    section: "B",
    address: { current: "Vehari", permanent: "Jhang" }
  },
  {
    rollnumber: 119,
    name: "Nimra Shafqat",
    age: 22,
    gender: "Female",
    marks: 76,
    contact: { self: "03181234567", parent: "03291234567" },
    section: "C",
    address: { current: "Muzaffargarh", permanent: "Khanewal" }
  },
  {
    rollnumber: 120,
    name: "Asad Mehmood",
    age: 23,
    gender: "Male",
    marks: 84,
    contact: { self: "03191234567", parent: "03301234567" },
    section: "A",
    address: { current: "Sahiwal", permanent: "Pakpattan" }
  },
  {
    rollnumber: 121,
    name: "Maha Adeel",
    age: 21,
    gender: "Female",
    marks: 90,
    contact: { self: "03201234567", parent: "03311234567" },
    section: "B",
    address: { current: "Mirpur", permanent: "Kotli" }
  },
  {
    rollnumber: 122,
    name: "Jawad Mirza",
    age: 25,
    gender: "Male",
    marks: 73,
    contact: { self: "03211234567", parent: "03321234567" },
    section: "C",
    address: { current: "Gilgit", permanent: "Skardu" }
  },
  {
    rollnumber: 123,
    name: "Laiba Noor",
    age: 22,
    gender: "Female",
    marks: 91,
    contact: { self: "03221234567", parent: "03331234567" },
    section: "A",
    address: { current: "Abbottabad", permanent: "Mansehra" }
  },
  {
    rollnumber: 124,
    name: "Saad Rehman",
    age: 24,
    gender: "Male",
    marks: 78,
    contact: { self: "03231234567", parent: "03341234567" },
    section: "B",
    address: { current: "Dera Ismail Khan", permanent: "Tank" }
  },
  {
    rollnumber: 125,
    name: "Hina Qadir",
    age: 20,
    gender: "Female",
    marks: 86,
    contact: { self: "03241234567", parent: "03351234567" },
    section: "C",
    address: { current: "Gwadar", permanent: "Turbat" }
  }
];
    /////////////// GET http request methods
    getALLStudents(){
        return this.students
    }
    getStudentById(id:number){
      const student =  this.students.find((student)=>student.rollnumber===id)
      if(!student){
         throw new NotFoundException("no student found with this rollnumber") // throw exception in case of not found
      }
      return student
    }
    //////////////POST http method
    createStudent(data:{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}){
        const newStudent = {
            rollnumber:Date.now(),
            ...data // extract every thing from data that is name and age and store in it newstudent object
        }
        this.students.push(newStudent) // push the newstudent into students array
        return {msg:"student added succesfully",newStudent}
    }
        ////////////// PUT http method
    updateStudent(rollnumber:number,data:{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}){
        const index = this.students.findIndex((student)=>student.rollnumber===rollnumber)
        if(index === -1){ // -1 index means no student found
          throw new NotFoundException("no student found with this rollnumber")
        }
        this.students[index]={rollnumber,...data}
        return {
            msg:"student updated",
            student:this.students[index]
        }
    }
       ////////////// PATCH http method
       patchStudent(rollnumber:number,data:Partial<{name:string;age:number;gender:string;marks:number;section:string;contact:{self:string;parent:string};address:{current:string;permanent:string}}>){ // partial means if any thing from name or age come it will works
        const student = this.getStudentById(rollnumber)  // we can also get student like this
        Object.assign(student,data)
        return{msg:'succesfully updated',student}

       }
       ///////////////////// DELETE
       deleteStudent(rollnumber:number){
        const index = this.students.findIndex((student)=>student.rollnumber===rollnumber)
        if(index === -1){
          throw new NotFoundException("no student found with this rollnumber")
        }
        const deleteStudent = this.students.splice(index,1) // return array
        return {id:deleteStudent[0].rollnumber,name:deleteStudent[0].name, msg:"student has been deleted"}
       }
}

import { Component, OnInit } from '@angular/core';
import Student from '../Models/UI-Models/student.model';
import { StudentService } from './student.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  implements OnInit{
  
  students:Student[]=[];
  allStudents: number = 0;
  pagination: number = 1;
  constructor(private studentService :StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe(
      (successResponse)=>
      {
       this.students=successResponse;
       this.allStudents=successResponse.length;
      },
      (errorResponse)=>{
        console.log(errorResponse);
      }
    );
    
  }

  

  renderPage(event: number) {
    this.pagination = event;
   
  }

}

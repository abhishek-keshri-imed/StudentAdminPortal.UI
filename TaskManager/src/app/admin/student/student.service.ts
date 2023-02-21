import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable} from 'rxjs'
import Student from '../Models/API-Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private baseApiUrl= 'https://localhost:7041';

  constructor(private http: HttpClient) { }

  getStudent():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.baseApiUrl + '/Student')
  }
}

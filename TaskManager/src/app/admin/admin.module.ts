import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { StudentComponent } from './student/student.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  
  ],
  exports:[
    DashboardComponent,AboutComponent,StudentComponent
  ],
  providers:[ DashboardService]
})
export class AdminModule { }

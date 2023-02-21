import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;
  CurrenetExpenditure: number;
  AvailableFunds: number;
  Clients: String[];
  Projects: String[];
  Years: number[];
  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = [];

   constructor(private dashBoardService:DashboardService)
   {
      
   }

  ngOnInit() {
    this.Designation = "Teamleader";
    this.Username = "Abhishek Keshri";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 2213507;
    this.CurrenetExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients = ["ABS Infotec Ltd.", "DLF Software Solutions", "Hexaware Technologies", "Incube Expert"];
    this.Projects = ["PROJECT A", "PROJECT B", "PROJECT C", "PROJECT D", "PROJECT E"];
    this.Years = [2018, 2019, 2020, 2021, 2022, 2023];

    this.TeamMembersSummary=this.dashBoardService.getTeamMemberSummary();
    console.log(this.TeamMembersSummary);

    // this.TeamMembersSummary = [
    //   { "Region": "East", "TeamMembersCount": 20, "TeamUnAvailableMember": 3 },
    //   { "Region": "West", "TeamMembersCount": 13, "TeamUnAvailableMember": 5 },
    //   { "Region": "North", "TeamMembersCount": 27, "TeamUnAvailableMember": 4 },
    //   { "Region": "South", "TeamMembersCount": 18, "TeamUnAvailableMember": 2 },
    // ];

    this.TeamMembers = [
      {
        "Region": "East", Members: [
          { "ID": 2100345, "NAME": "Raman Kumar", "Status": "Busy" },
          { "ID": 2100349, "NAME": "Parth Arora", "Status": "Busy" },
          { "ID": 2100331, "NAME": "Ankit Gupta", "Status": "Available" },
          { "ID": 2100389, "NAME": "Himashu Dixit", "Status": "Busy" },
        ]
      },
      {
        "Region": "West", Members: [
          { "ID": 2100345, "NAME": "Raman Kumar", "Status": "Busy" },
          { "ID": 2100349, "NAME": "Parth Arora", "Status": "Busy" },
          { "ID": 2100331, "NAME": "Ankit Gupta", "Status": "Available" },
          { "ID": 2100389, "NAME": "Himashu Dixit", "Status": "Busy" },
        ]
      },
      {
        "Region": "North", Members: [
          { "ID": 2100345, "NAME": "Raman Kumar", "Status": "Busy" },
          { "ID": 2100349, "NAME": "Parth Arora", "Status": "Busy" },
          { "ID": 2100331, "NAME": "Ankit Gupta", "Status": "Available" },
          { "ID": 2100389, "NAME": "Himashu Dixit", "Status": "Busy" },
        ]
      },
      {
        "Region": "South", Members: [
          { "ID": 2100345, "NAME": "Raman Kumar", "Status": "Busy" },
          { "ID": 2100349, "NAME": "Parth Arora", "Status": "Busy" },
          { "ID": 2100331, "NAME": "Ankit Gupta", "Status": "Available" },
          { "ID": 2100389, "NAME": "Himashu Dixit", "Status": "Busy" },
        ]
      }
    ]

  }

}

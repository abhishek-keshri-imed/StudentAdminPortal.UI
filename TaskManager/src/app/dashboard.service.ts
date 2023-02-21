import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
getTeamMemberSummary()
{
  var TeamMembersSummary = [
    { "Region": "East", "TeamMembersCount": 20, "TeamUnAvailableMember": 3 },
    { "Region": "West", "TeamMembersCount": 13, "TeamUnAvailableMember": 5 },
    { "Region": "North", "TeamMembersCount": 27, "TeamUnAvailableMember": 4 },
    { "Region": "South", "TeamMembersCount": 18, "TeamUnAvailableMember": 2 },
  ];

  return  TeamMembersSummary 
}
}

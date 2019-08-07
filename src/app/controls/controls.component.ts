import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member.service';
import {TeamService} from '../team/team.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  addMadeInputPlaceholder = 'Add a new Member';
  addMadeButtonText = 'Add';
  randomizeButtonText = 'Randomize';

  newMemberName = '';

  constructor(private memberService: MemberService, private teamService: TeamService) { }

  ngOnInit() {
  }

  addMemberToTeam1(): void {
    if (this.newMemberName.length === 0) {
      return;
    }
    const newMember = this.memberService.create(this.newMemberName);
    const team = this.teamService.getTeams()[0];
    team.members.push(newMember);
    this.newMemberName = '';
  }

  randomize(): void {
    this.teamService.removeAllMembersFromAllTeams();
    const teams = this.teamService.getTeams();
    const allMembers = this.memberService.getAllMembers();

    allMembers.forEach(member => {
      this.memberService.joinRandomTeam(teams, member);
    });
  }
}

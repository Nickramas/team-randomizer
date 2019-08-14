import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member/member.service';
import {TeamService} from '../team/team.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  newMemberName = '';

  constructor(private memberService: MemberService, private teamService: TeamService) { }

  ngOnInit() {
  }

  // Add new Member
  onClickAdd(): void {
    if (this.newMemberName.length === 0) {
      return;
    }
    const newMember = this.memberService.create(this.newMemberName);
    const team = this.teamService.getTeams()[0];
    team.members.push(newMember);
    this.newMemberName = '';
  }

  // Randomize Members
  onClickRandomize(): void {
    this.teamService.removeAllMembersFromAllTeams();
    const teams = this.teamService.getTeams();
    const allMembers = this.memberService.getMembers();

    allMembers.forEach(member => {
      this.memberService.joinRandomTeam(teams, member);
    });
  }
}

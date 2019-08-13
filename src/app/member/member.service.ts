import {Injectable} from '@angular/core';
import {Member} from '../models/Member';
// @ts-ignore
import uuid from 'uuid';
import {Team} from '../models/Team';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public members: Member[] = [];

  public constructor(private teamService: TeamService) {
  }

  public create(name: string): Member {
    const newMember: Member = {
      id: uuid.v4(),
      name
    };

    this.members.push(newMember);
    return newMember;
  }

  public getAllMembers(): Member[] {
    return this.members;
  }

  public remove(member: Member) {
    const teams: Team[] = this.teamService.getTeams();
    for (const team of teams) {
      const members: Member[] = team.members;
      const memberIndex: number = members.findIndex(m => {
        return member.id === m.id;
      });

      if (memberIndex !== -1) {
        members.splice(memberIndex, 1);
        this.removeFromMembers(member);
      }
    }

    // this.teamService.setTeams(teams);
  }

  private removeFromMembers(member: Member): void {
    const memberIntex = this.members.findIndex(m => {
      return member.id === m.id;
    });

    this.members.splice(memberIntex, 1);
  }

  public joinRandomTeam(avalableTeams: Team[], member: Member): void {
    const maxTeamIndex: number = avalableTeams.length;
    const randomTeamIndex: number = Math.floor(Math.random() * maxTeamIndex);
    avalableTeams[randomTeamIndex].members.push(member);
  }
}

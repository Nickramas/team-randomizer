import {Injectable} from '@angular/core';
import {Team} from '../models/Team';
import {Member} from '../models/Member';
// @ts-ignore
import uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[] = [];

  constructor() {
  }

  create(name: string): Team {
    const id = uuid.v4();
    const members: Member[] = [];
    const newTeam: Team = {
      id,
      name,
      members
    };

    this.teams.push(newTeam);
    return newTeam;
  }

  addMember(team: Team, member: Member): Team {
    team.members.push(member);
    return team;
  }

  removeMember(team: Team, member: Member): void {

    const memberIndex = team.members.findIndex(m => m.id === member.id);

    if (memberIndex === -1) {
      return null;
    }

    team.members.splice(memberIndex, 1);
  }

  getTeams(): Team[] {
    return this.teams;
  }

  setTeams(teams: Team[]): void {
    this.teams = teams;
  }

  removeAllMembersFromAllTeams(): Team[] {
    this.teams.forEach(team => {
      team.members = [];
    });

    return this.teams;
  }
}

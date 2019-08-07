import {Injectable} from '@angular/core';
import {Team} from '../models/Team';
import {Member} from '../models/Member';
// @ts-ignore
import uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() {
  }

  static create(name: string): Team {
    const id = uuid.v4();
    const members: Member[] = [];

    return {
      id,
      name,
      members
    };
  }

  static addMember(team: Team, member: Member): Team {
    team.members.push(member);
    return team;
  }

  static removeMember(team: Team, member: Member): Team {
    const memberIndex = team.members.findIndex(m => m.id === member.id);

    if (memberIndex === -1) {
      return null;
    }

    team.members.splice(memberIndex, 1);

    return team;
  }
}

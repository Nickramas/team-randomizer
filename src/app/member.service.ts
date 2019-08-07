import {Injectable} from '@angular/core';
import {Member} from './models/Member';
// @ts-ignore
import uuid from 'uuid';
import {Team} from './models/Team';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members: Member[] = [];

  constructor() {
  }

  create(name: string): Member {
    const newMember: Member = {
      id: uuid.v4(),
      name
    };

    this.members.push(newMember);
    return newMember;
  }

  getAllMembers(): Member[] {
    return this.members;
  }

  joinRandomTeam(avalableTeams: Team[], member: Member): void {
    const maxTeamIndex: number = avalableTeams.length;
    const randomTeamIndex: number = Math.floor(Math.random() * maxTeamIndex);
    avalableTeams[randomTeamIndex].members.push(member);
  }
}

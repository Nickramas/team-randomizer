import {Injectable} from '@angular/core';
import {Member} from './models/Member';
// @ts-ignore
import uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() {
  }

  create(name: string): Member {
    return {
      id: uuid.v4(),
      name
    };
  }
}

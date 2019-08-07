import {Member} from './Member';

export interface Team {
  id: string;
  name: string;
  members: Member[];
}

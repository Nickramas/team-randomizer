import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../models/Member';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  mouseIsHovering = false;
  @Input() member: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  onMouseOver() {
    this.mouseIsHovering = true;
  }

  onMouseLeave() {
    this.mouseIsHovering = false;
  }

  deleteMember() {
    this.memberService.remove(this.member);
  }

}

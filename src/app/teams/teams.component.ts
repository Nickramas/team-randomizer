import { Component, OnInit } from '@angular/core';
import {Team} from '../models/Team';
import {TeamService} from '../team/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.addTeam('Team 1');
    this.addTeam('Team 2');
  }

  addTeam(name: string): void {
    const newTeam: Team = this.teamService.create(name);
    this.teams.push(newTeam);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams = [
    {
      name: 'Team 1',
      mades: [
        'Marde',
        'Rufgan',
        'HellyBelly'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

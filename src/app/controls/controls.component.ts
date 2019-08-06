import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  addMadeInputPlaceholder = 'Add a new Made';
  addMadeButtonText = 'Add';

  constructor() { }

  ngOnInit() {
  }

}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ControlsComponent} from './controls/controls.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {TeamComponent} from './team/team.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { TeamsComponent } from './teams/teams.component';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    TeamComponent,
    TeamsComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component } from '@angular/core';
import {matMenuTriggerFor} from '@angular/material';
@Component({
  selector: 'navigation',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent  {
  imports:[matMenuTriggerFor]
}

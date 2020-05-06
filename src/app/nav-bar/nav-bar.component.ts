import { Component } from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'navigation',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent  {
  imports:[
    MatMenuModule
    ]
}

import { Component } from '@angular/core';
import {} from '@angular/material/menu';
import { MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';
const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];
@Component({
  selector: 'navigation',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent  {
  imports:[]
}

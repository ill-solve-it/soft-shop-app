import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu'
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'navigation',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ]
})
export class NavBarComponent  {

  @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
  }
  openMyMenu() {
    this.matMenuTrigger.openMenu();

  } 
  closeMyMenu() {
    this.matMenuTrigger.closeMenu();
  }
  imports:[
    MatMenuModule
    ]
}

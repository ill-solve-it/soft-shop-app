import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu'
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'menu1',
  templateUrl: './menu1.component.html',
  styleUrls: [ './menu1.component.css' ]
})
export class Menu1Component  implements OnInit {
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
}
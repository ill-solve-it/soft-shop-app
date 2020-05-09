import { Component } from '@angular/core';
import {} from '@angular/material/menu';



import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider'; 
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]
})
export class LayoutComponent  {
  imports:[MatDividerModule,MatListModule]
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu'
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
@Component({
  selector: 'navigation',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent  {


  imports:[ BrowserAnimationsModule,
    MatMenuModule,MatInputModule,MatFormFieldModule,MatToolbarModule
    ]
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , NavBarComponent],
  bootstrap:    [ AppComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

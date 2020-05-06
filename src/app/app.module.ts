import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {LayoutComponent} from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MDBBootstrapModule, DropdownModule, InputsModule, CardsModule } from 'angular-bootstrap-md';

import { MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';
const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  imports:      [ BrowserModule, FormsModule ,CardsModule,InputsModule,MDBBootstrapModule],
  declarations: [ AppComponent, HelloComponent , NavBarComponent, LayoutComponent],
  bootstrap:    [ AppComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

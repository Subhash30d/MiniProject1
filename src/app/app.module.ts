import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavComponent } from './left-nav/left-nav/left-nav.component';
import { FormsModule } from '@angular/forms';
import { MaincontentComponent } from './Maincontent/maincontent/maincontent.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

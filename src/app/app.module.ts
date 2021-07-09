import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { PillButtonComponent } from './components/pill-button/pill-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PillButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

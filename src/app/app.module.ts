import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { PillButtonComponent } from './components/pill-button/pill-button.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PillButtonComponent,
    FeatureCardComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

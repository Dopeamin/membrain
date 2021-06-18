import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ExploreComponent } from './explore/explore.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { GlobalVariables } from './GlobalVariables';
import { ArticleComponent } from './explore/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ExploreComponent,
    ScrollerComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: Window, useValue: window },
    GlobalVariables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

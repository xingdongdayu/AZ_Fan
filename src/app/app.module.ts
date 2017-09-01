import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootComponent } from './foot/foot.component';
import { RestrauntsComponent } from './restraunts/restraunts.component';
import { RestrauntDetailComponent } from './restraunt-detail/restraunt-detail.component';
import { SearchComponent } from './search/search.component';
import { ScoreComponent } from './score/score.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent,
    RestrauntsComponent,
    RestrauntDetailComponent,
    SearchComponent,
    ScoreComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

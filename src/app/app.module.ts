import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokedeskComponent } from './page/pokedesk/pokedesk.component';
import { CardPokedeskComponent } from './page/pokedesk/card-pokedesk/card-pokedesk.component';
import { PokedeskDetailComponent } from './page/pokedesk-detail/pokedesk-detail.component';
import {RouterModule} from "@angular/router";
import { appRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PokedeskComponent,
    CardPokedeskComponent,
    PokedeskDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

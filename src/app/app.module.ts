import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component'
import { AboutComponent }from './components/about/about.component';
import { SearchComponent }from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [routing,
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
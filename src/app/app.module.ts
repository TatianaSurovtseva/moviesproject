import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {MovieService} from './services/movie.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component'
import { AboutComponent }from './components/about/about.component';
import { SearchComponent }from './components/search/search.component';
import { MovieComponent }from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [routing,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
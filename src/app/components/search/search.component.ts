import { Component } from '@angular/core';
import { MovieService} from '../../services/movie.service'
import {Movie} from '../../../../Movie'


@Component({
  //moduleId:module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  //styleUrls: ['navbar.component.css']
})
export class SearchComponent {
  searchStr:string;
  searchRes: Movie[];
  constructor(private _movieService:MovieService){


  }
  
  searchMovie(){
    this._movieService.searchMovie(this.searchStr)
      .subscribe(res=>{
    this.searchRes = res.results;
      //console.log(res.results);   
  })
}
}

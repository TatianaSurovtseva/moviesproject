import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'
import { Movie } from '../../../../Movie'

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
})

export class SearchComponent {
  searchStr: string;
  searchRes: Movie[];
  constructor(private _movieService: MovieService) {
  }

  //search for a movie using movie service
  searchMovie() {
    this._movieService.searchMovie(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.results;
      })
  }
}

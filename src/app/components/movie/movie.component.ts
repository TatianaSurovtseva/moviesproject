import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../Movie';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'movie',
    templateUrl: 'movie.component.html'
})
export class MovieComponent implements OnInit {
    id: number;
    movie: Movie[];
    movieList: Array<Movie> = [];

    constructor(private _movieService: MovieService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._movieService.getMovie(id)
                    .subscribe(movie => {
                        this.movie = movie;
                    })
            })
    }

    addMovieToList() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._movieService.getMovie(id)
                    .subscribe(movie => {
                        let movies = []; //Beginnen met een lege array
                        if (localStorage.getItem("movies") !== null) { //bestaat movies al? Zo ja:
                            movies = JSON.parse(localStorage.getItem('movies')); //Vervang de lege array met wat we al hadden
                        }
                        movies.push(movie.title); //voeg movie toe aan de movies array
                        localStorage.setItem('movies', JSON.stringify(movies)); //stop de nieuwe (gevulde) array terug in LS
                    });
            })

    }
}


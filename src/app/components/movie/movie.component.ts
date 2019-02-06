import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../Movie';
import {ActivatedRoute} from "@angular/router";


@Component({
     //moduleId:module.id,
  selector: 'movie',
  templateUrl: 'movie.component.html'
 // styleUrls: ['movie.component.css']
})
export class MovieComponent implements OnInit {
    id:number;
    movie: Movie[];
    image: ImageBitmap;

    constructor(private _movieService:MovieService,
         private _route: ActivatedRoute){
    }


    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._movieService.getMovie(id)
                    .subscribe(movie => {
                        this.movie = movie;
                    })
        })
    }
}
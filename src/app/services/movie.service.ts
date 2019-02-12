import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    private searchUrl: string;
    private movieUrl: string;

    constructor(private _http: Http) {
    }

    //search for movie in movie db
    searchMovie(str: string, api_key = '4a79c5aba4009f2418c06b97ce394cca') {
        this.searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US&query=' + str + '&page=1&include_adult=true';
        //?query='+str + 'api_key'+ api_key;
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }

    //get 1 movie from movie db
    getMovie(id: number, api_key = '4a79c5aba4009f2418c06b97ce394cca') {
        this.movieUrl = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + api_key;
        return this._http.get(this.movieUrl)
            .map(res => res.json());
    }
}
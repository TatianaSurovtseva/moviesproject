import { Component, OnInit } from '@angular/core';
import { Movie } from 'Movie';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
})

export class ListComponent implements OnInit {

    movie: Array<Movie>[];
    constructor() {
    }
    ngOnInit() {
        //add movies from storage to array
        this.movie = JSON.parse(localStorage.getItem("movies"));
    }
    //delets the list in localstorage and refreshes the page
    deleteList() {
        localStorage.clear();
        window.location.reload();
    }
}
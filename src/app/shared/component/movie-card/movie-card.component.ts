import { Component, OnInit} from '@angular/core';
import { Imovie } from '../../model/movies';
import { moviesArray } from '../../const/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
 
})
export class MovieCardComponent implements OnInit {
  moviesData :Array<Imovie> =[]
  constructor() { }

  ngOnInit(): void {
    this.moviesData =moviesArray
  }

}

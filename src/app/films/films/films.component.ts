import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {filmsmetadata} from '../../models/films_models/filmsmetadata';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [DataServiceService]
})
export class FilmsComponent implements OnInit {

  private films: filmsmetadata;
  constructor(
    private dataService: DataServiceService,

  ) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.dataService.getFilms().subscribe(
      films => {
        this.films = films;
    },
      error => {
        console.log('error fetching films : ' + error.toLocaleString());
    }
    );
  }
}

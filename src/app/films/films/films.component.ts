import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private dataService:DataServiceService,private films:Object) { }

  ngOnInit() {

  }

  getFilms(): void{
    this.dataService.getFilms().subscribe(
      films => {

    },
      error => {

    }
    );

  }
}

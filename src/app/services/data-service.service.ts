import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filmsMetadata} from '../models/films_models/filmsmetadata';
import {Film} from '../models/films_models/Film';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  BASE_URL:string = 'https://swapi.co/api/';
  BASE_FORMAT:string = '?format=json'
  constructor(private http:HttpClient) { }


  // films
  getFilms(): Observable<filmsMetadata>{
    return this.http.get<filmsMetadata>(this.BASE_URL+'films/'+this.BASE_FORMAT);
  }
  getFilm(film_index: number): Observable<Film>{
    return this.http.get<Film>(this.BASE_URL+`films/${film_index}/`+this.BASE_FORMAT)
  }

  // people


}

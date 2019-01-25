import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [FilmComponent, FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }

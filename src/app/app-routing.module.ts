import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'films', pathMatch: 'full'
  },
  {
    path: 'films', loadChildren: './films/films.module#FilmsModule'
  },
  {
    path: 'databank', loadChildren: './films/films.module#FilmsModule'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '/films'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

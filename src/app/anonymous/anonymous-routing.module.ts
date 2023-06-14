import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousComponent } from './anonymous-component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaDetailComponent } from './cinema-list/cinema-detail/cinema-detail.component';
import { BookingSeatComponent } from './booking-seat/booking-seat.component';

const routes: Routes = [
  {path : '',component : AnonymousComponent,children:[
    {path : 'movielist', component : MovieListComponent},
    {path : "movieDetail/:id",component : MovieDetailsComponent},
    {path : 'cinemalist', component : CinemaListComponent},
    {path : "cinemaDetail/:id",component : CinemaDetailComponent},
    {path : "bookingseat",component : BookingSeatComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonymousRoutingModule } from './anonymous-routing.module';
import { AnonymousComponent } from './anonymous-component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaDetailComponent } from './cinema-list/cinema-detail/cinema-detail.component';
import { BookingSeatComponent } from './booking-seat/booking-seat.component';



@NgModule({
  declarations: [
    AnonymousComponent,
    MovieListComponent,
    MovieDetailsComponent,
    CinemaListComponent,
    CinemaDetailComponent,
    BookingSeatComponent
  ],
  imports: [
    CommonModule,
    AnonymousRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class AnonymousModule { }

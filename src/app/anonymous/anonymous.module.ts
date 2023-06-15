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
import { BookingSeatComponent } from './booking-seat/booking-seat.component';
import { PaymentComponent } from './payment/payment.component';
import { VoucherComponent } from './voucher/voucher.component';



@NgModule({
  declarations: [
    AnonymousComponent,
    MovieListComponent,
    MovieDetailsComponent,
    BookingSeatComponent,
    PaymentComponent,
    VoucherComponent
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

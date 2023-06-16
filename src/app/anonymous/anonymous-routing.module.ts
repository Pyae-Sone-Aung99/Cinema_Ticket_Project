import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousComponent } from './anonymous-component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';
import { BookingSeatComponent } from './booking-seat/booking-seat.component';
import { PaymentComponent } from './payment/payment.component';
import { VoucherComponent } from './voucher/voucher.component';
import { UpcomingDetailsComponent } from './movie-list/upcoming-details/upcoming-details.component';

const routes: Routes = [
  {path : '',component : AnonymousComponent,children:[
    {path : 'movielist', component : MovieListComponent},
    {path : "movieDetail/:id",component : MovieDetailsComponent},
    {path : "bookingseat",component : BookingSeatComponent},
    {path : "payment",component : PaymentComponent},
    {path : "voucher",component : VoucherComponent},
    {path : "upcomingDetail/:id",component : UpcomingDetailsComponent},
    {path : '',pathMatch : 'full',redirectTo : '/movielist'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousRoutingModule { }

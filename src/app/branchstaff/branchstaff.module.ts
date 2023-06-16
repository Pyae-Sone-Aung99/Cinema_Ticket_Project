import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchstaffRoutingModule } from './branchstaff-routing.module';
import { BranchstaffComponent } from './branchstaff-component';
import { NowShowingStaffComponent } from './now-showing-staff/now-showing-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';


@NgModule({
  declarations: [
    BranchstaffComponent,
    NowShowingStaffComponent,
    SeatBookingComponent
  ],
  imports: [
    CommonModule,
    BranchstaffRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BranchstaffModule { }

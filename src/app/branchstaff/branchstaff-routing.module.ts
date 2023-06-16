import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchstaffComponent } from './branchstaff-component';
import { NowShowingStaffComponent } from './now-showing-staff/now-showing-staff.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

const routes: Routes = [
  {path : '',component : BranchstaffComponent,children : [
     { path : 'nowshowing',component : NowShowingStaffComponent},
     {path : 'bookingseat',component : SeatBookingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchstaffRoutingModule { }

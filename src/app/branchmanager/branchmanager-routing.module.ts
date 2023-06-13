import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchmanagerComponent } from './branchmanager-component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { TheaterListComponent } from './theater-list/theater-list.component';
import { SellSeatComponent } from './sell-seat/sell-seat.component';

const routes: Routes = [
  {path : '',component : BranchmanagerComponent,children : [
    {path : 'upcoming',component : UpcomingMoviesComponent},
    {path : 'staff',component : StaffListComponent},
    {path : 'theaterlist',component: TheaterListComponent},
    {path : 'sellSeat',component : SellSeatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchmanagerRoutingModule { }

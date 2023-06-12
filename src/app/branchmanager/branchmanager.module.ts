import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchmanagerRoutingModule } from './branchmanager-routing.module';
import { BranchmanagerComponent } from './branchmanager-component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { AddEditComponent } from './staff-list/add-edit/add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';


@NgModule({
  declarations: [
    BranchmanagerComponent,
    StaffListComponent,
    AddEditComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    CommonModule,
    BranchmanagerRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BranchmanagerModule { }

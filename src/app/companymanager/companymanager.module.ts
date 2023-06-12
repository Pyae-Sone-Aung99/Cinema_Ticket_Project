import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanymanagerRoutingModule } from './companymanager-routing.module';
import { CompanymanagerComponent } from './companymanager-component';
import { CinemalistComponent } from './cinemalist/cinemalist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchmanagerComponent } from './branchmanager/branchmanager.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './cinemalist/add-edit/add-edit.component';



@NgModule({
  declarations: [
    CompanymanagerComponent,
    DashboardComponent,
    CinemalistComponent,
    BranchmanagerComponent,
    AddEditComponent

  ],
  imports: [
    CommonModule,
    CompanymanagerRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanymanagerModule { }

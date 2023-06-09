import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchstaffRoutingModule } from './branchstaff-routing.module';
import { BranchstaffComponent } from './branchstaff-component';


@NgModule({
  declarations: [
    BranchstaffComponent
  ],
  imports: [
    CommonModule,
    BranchstaffRoutingModule
  ]
})
export class BranchstaffModule { }

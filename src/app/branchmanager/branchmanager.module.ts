import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchmanagerRoutingModule } from './branchmanager-routing.module';
import { BranchmanagerComponent } from './branchmanager-component';


@NgModule({
  declarations: [
    BranchmanagerComponent
  ],
  imports: [
    CommonModule,
    BranchmanagerRoutingModule
  ]
})
export class BranchmanagerModule { }

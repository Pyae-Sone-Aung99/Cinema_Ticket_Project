import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchstaffComponent } from './branchstaff-component';

const routes: Routes = [
  {path : '',component : BranchstaffComponent,children : [
     //there will be child route like http://localhost:4200/branchstaff/route
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchstaffRoutingModule { }

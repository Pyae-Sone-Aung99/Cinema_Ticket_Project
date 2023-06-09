import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchmanagerComponent } from './branchmanager-component';

const routes: Routes = [
  {path : '',component : BranchmanagerComponent,children : [
    //there will be child route like http://localhost:4200/branchmanager/route
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchmanagerRoutingModule { }

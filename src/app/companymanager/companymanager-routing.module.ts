import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanymanagerComponent } from './companymanager-component';
import { CinemalistComponent } from './cinemalist/cinemalist.component';
import { BranchmanagerComponent } from './branchmanager/branchmanager.component';


const routes: Routes = [
  {path : '',component : CompanymanagerComponent,children : [
    {path : 'cinemalist',component : CinemalistComponent},
    {path : 'branchmanager',component : BranchmanagerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanymanagerRoutingModule { }

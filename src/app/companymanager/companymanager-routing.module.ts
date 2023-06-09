import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanymanagerComponent } from './companymanager-component';

const routes: Routes = [
  {path : '',component : CompanymanagerComponent,children : [
    //there will be child route like http://localhost:4200/companymanager/route
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanymanagerRoutingModule { }

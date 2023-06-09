import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'anonymous',loadChildren: ()=> import('./anonymous/anonymous.module').then(m=>m.AnonymousModule) },
  {path : 'superadmin',loadChildren: ()=> import ('./superadmin/superadmin.module').then(m=>m.SuperadminModule)},
  {path : 'companymanager',loadChildren: ()=> import ('./companymanager/companymanager.module').then(m=>m.CompanymanagerModule)},
  {path : 'branchmanager',loadChildren: ()=> import ('./branchmanager/branchmanager.module').then(m=>m.BranchmanagerModule)},
  {path : 'branchstaff',loadChildren: ()=> import ('./branchstaff/branchstaff.module').then(m=>m.BranchstaffModule)},
  { path: '',redirectTo: '/anonymous',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

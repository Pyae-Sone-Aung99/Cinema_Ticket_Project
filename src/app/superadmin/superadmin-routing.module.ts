import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperadminComponent } from './superadmin-component';

const routes: Routes = [
  {path : '',component : SuperadminComponent,children : [
//there will be child route like http://localhost:4200/superadmin/route
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }

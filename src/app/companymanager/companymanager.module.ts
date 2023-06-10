import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanymanagerRoutingModule } from './companymanager-routing.module';
import { CompanymanagerComponent } from './companymanager-component';
import { CinemalistComponent } from './cinemalist/cinemalist.component';



@NgModule({
  declarations: [
    CompanymanagerComponent,
    CinemalistComponent,
  ],
  imports: [
    CommonModule,
    CompanymanagerRoutingModule
  ]
})
export class CompanymanagerModule { }

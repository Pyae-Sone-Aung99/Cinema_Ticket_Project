import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanymanagerRoutingModule } from './companymanager-routing.module';
import { CompanymanagerComponent } from './companymanager-component';


@NgModule({
  declarations: [
    CompanymanagerComponent
  ],
  imports: [
    CommonModule,
    CompanymanagerRoutingModule
  ]
})
export class CompanymanagerModule { }

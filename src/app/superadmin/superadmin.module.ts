import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminComponent } from './superadmin-component';
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SuperadminComponent,
    AddEditComponent,

  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SuperadminModule { }

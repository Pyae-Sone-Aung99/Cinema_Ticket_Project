import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SuperadminServicesService } from '../services/superadmin-services.service';

@Component({
  selector : 'app-super-admin',
  templateUrl : './superadmin-component.html',
  styleUrls : [ './superadmin-component.scss' ]
})

export class SuperadminComponent implements OnInit{

    companymanagerList!:any
    enterSearchValue : string = ''

    ngOnInit(): void {
      this.getCompanyManager();

    }

    constructor(private _dialog:MatDialog,private _services: SuperadminServicesService){}

    // this is for adding
    openAddEditCMForm(){
      const dialogRef = this._dialog.open(AddEditComponent,{
        width : '30%'
      })
      dialogRef.afterClosed().subscribe({
        next : (val)=>{
          if(val){
            this.getCompanyManager();
          }
        }
      })
    }

    // this is for updating data
    openEditCMForm(data:any){
      const dialogRef = this._dialog.open(AddEditComponent,{
        width : "30%",data //actually here data : data
      })
      dialogRef.afterClosed().subscribe({
        next : (val)=>{
          if(val){
            this.getCompanyManager();
          }
        }
      })
    }

    //this is getting data
    getCompanyManager(){
      this._services.getCompanyManagerList().subscribe({
        next : (resp)=>{
          this.companymanagerList = resp
        }
      })
    }

    // this is deleating
    deleteCompanyManager(id:number){
      this._services.deleteCompanyManager(id).subscribe({
        next : ()=>{
          this.getCompanyManager();
        },
        error : (err)=>{
          console.error(err);

        }
      }
        )
    }



}

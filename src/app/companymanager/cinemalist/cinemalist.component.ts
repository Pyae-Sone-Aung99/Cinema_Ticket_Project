import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';


@Component({
  selector: 'app-cinemalist',
  templateUrl: './cinemalist.component.html',
  styleUrls: ['./cinemalist.component.scss']
})
export class CinemalistComponent implements OnInit {

  cinemaList!:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this.getCinema();
  }

  constructor(private _dialog:MatDialog,private _services : CompanymanagerServicesService){}



  openAddEditCinemaForm(){
    const dialogRef = this._dialog.open(AddEditComponent,{
      disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this.getCinema();
        }
      }
    })
  }

  openUpdateCinemaForm(data:any){
    const dialogRef = this._dialog.open(AddEditComponent,{
      disableClose : true,data : data
    })

    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this.getCinema();
        }
      }
    })
  }

  getCinema(){
    this._services.getCinemalist().subscribe({
      next : (resp)=>{
        this.cinemaList = resp
      }
    })
  }

  deleteCinema(id:number){
    this._services.deleteCinema(id).subscribe({
      next : ()=>{
        this.getCinema();
      }
    })
  }
}

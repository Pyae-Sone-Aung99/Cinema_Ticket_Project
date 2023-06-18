import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-cinemalist',
  templateUrl: './cinemalist.component.html',
  styleUrls: ['./cinemalist.component.scss']
})
export class CinemalistComponent implements OnInit {
  cinemaList :any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['cmId']){
        const id = Number(params['cmId'])
        this.getCinemaById(id)
      }
    })
  }

  constructor(private _dialog:MatDialog,private _services : CompanymanagerServicesService,
    private _route : ActivatedRoute,private _loginServices : LoginService){}

    getCinemaById(id:number){
      this._services.getCinemalistById(id).subscribe(data => this.cinemaList = data)
    }



  openAddEditCinemaForm(){
    const dialogRef = this._dialog.open(AddEditComponent,{
      disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this._route.queryParams.subscribe(params =>{
            if(params['cmId']){
              const id = Number(params['cmId'])
              this.getCinemaById(id)
            }
          })
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
          this._route.queryParams.subscribe(params =>{
            if(params['cmId']){
              const id = Number(params['cmId'])
              this.getCinemaById(id)
            }
          })
        }
      }
    })
  }


  deleteCinema(id:number){
    this._services.deleteCinema(id).subscribe({
      next : ()=>{
        this._route.queryParams.subscribe(params =>{
          if(params['cmId']){
            const id = Number(params['cmId'])
            this.getCinemaById(id)
          }
        })
      }
    })
  }
}

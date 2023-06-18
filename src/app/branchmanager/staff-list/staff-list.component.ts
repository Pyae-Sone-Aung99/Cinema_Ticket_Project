import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit{

  staffList:any
  enterSearchValue:string = ''

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getStaffBybmIdData(id)
      }
    })
  }

  constructor(private _dialog:MatDialog,private _services : BranchManagerServiceService,
    private _router:Router,private _route:ActivatedRoute){}

  getStaffBybmIdData(id:number){
    this._services.getStaffByBranchManagerId(id).subscribe(data => this.staffList = data)
  }


  openAddEditCinemaForm(){
    const dialogRef= this._dialog.open(AddEditComponent,{
        disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val)
        this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getStaffBybmIdData(id)
          }
        })
      }
    })
  }



  openUpdateStaffForm(data:any){
    const dialogRef= this._dialog.open(AddEditComponent,{
      data : data,disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val)
        this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getStaffBybmIdData(id)
          }
        })
      }
    })
  }

  deleteStaff(id:number){
    this._services.deleteStaff(id).subscribe({
      next:()=>{
        this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getStaffBybmIdData(id)
          }
        })
      }
    })
  }

  // goStaff(){
  //   this._router.navigateByUrl("branchstaff/nowshowing")
  // }
}

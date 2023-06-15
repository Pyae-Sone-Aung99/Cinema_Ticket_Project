import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit{

  staffList:any
  enterSearchValue:string = ''

  ngOnInit(): void {
    this.getStaffList();
  }

  constructor(private _dialog:MatDialog,private _services : BranchManagerServiceService){}

  openAddEditCinemaForm(){
    const dialogRef= this._dialog.open(AddEditComponent,{
        disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val)
          this.getStaffList();
      }
    })
  }

  getStaffList(){
    this._services.getStaff().subscribe({
      next : (resp)=>{
        this.staffList = resp
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
          this.getStaffList();
      }
    })
  }

  deleteStaff(id:number){
    this._services.deleteStaff(id).subscribe({
      next:()=>{
        this.getStaffList()
      }
    })
  }
}

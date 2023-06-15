import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { AddEditNowShowingComponent } from './add-edit-now-showing/add-edit-now-showing.component';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent implements OnInit{

  NowShowingData:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this.getNowShowingData();
  }

  constructor(private _service:BranchManagerServiceService,private _dialog:MatDialog) {

  }

  openAddNowShowing(){
    const dialogRef = this._dialog.open(AddEditNowShowingComponent,{
      disableClose:true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this.getNowShowingData();
        }
      }
    })
  }

  openUpdateNowShowing(data:any){
    const dialogRef = this._dialog.open(AddEditNowShowingComponent,{
      data,disableClose:true
    })
    dialogRef.afterClosed().subscribe({
      next : ()=>{
        this.getNowShowingData();
      }
    })
  }

  getNowShowingData(){
    this._service.getNowShowing().subscribe({
      next : (resp)=>{
        this.NowShowingData = resp
      }
    })
  }

  onSubmit(){

  }
}

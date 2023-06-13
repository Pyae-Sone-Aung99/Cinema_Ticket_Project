import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from 'src/app/superadmin/add-edit/add-edit.component';
import { AddEditTheaterComponent } from './add-edit-theater/add-edit-theater.component';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit{

  theaterData:any
  ngOnInit(): void {
    this.getTheaterData();
  }

  constructor(private _dialog:MatDialog,private _services:BranchManagerServiceService){}

  openAddEditTheaterForm(){
    const dialogRef = this._dialog.open(AddEditTheaterComponent,{
    })
    dialogRef.afterClosed().subscribe({
      next : () => {
        return this.getTheaterData()
      }
    })
  }

  openUpdateCinemaForm(data:any){
    const dialogRef = this._dialog.open(AddEditTheaterComponent,{
      data : data
    })

    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this.getTheaterData();
        }
      }
    })
  }

  getTheaterData(){
    this._services.getTheater().subscribe({
      next : (resp)=>{
        this.theaterData = resp
      }
    })
  }


  deleteTheater(id:number){
    this._services.deleteTheater(id).subscribe({
      next : ()=>{
        this.getTheaterData();
      }
    })
  }

  // Calculation seat
  calculateTotalSeat(items: any[]): number {
    let totolseat = 0;

    for (const item of items) {

      totolseat += item.quantity;
    }
    return totolseat;
  }


}

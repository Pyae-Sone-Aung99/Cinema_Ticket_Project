import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from 'src/app/superadmin/add-edit/add-edit.component';
import { AddEditTheaterComponent } from './add-edit-theater/add-edit-theater.component';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.scss']
})
export class TheaterListComponent implements OnInit{

  theaterData:any
  enterSearchValue: string =''

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getTheaterBybmIdData(id)
      }
    })
  }

  constructor(private _dialog:MatDialog,private _services:BranchManagerServiceService,
    private _route:ActivatedRoute){}


  getTheaterBybmIdData(id:number){
    this._services.getTheatersById(id).subscribe(data => this.theaterData = data)
  }

  openAddEditTheaterForm(){
    const dialogRef = this._dialog.open(AddEditTheaterComponent,{
      disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val) => {
        if(val){
          this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
              const id = Number(params['bmId'])
              this.getTheaterBybmIdData(id)
            }
          })
        }
      }
    })
  }

  openUpdateCinemaForm(data:any){
    const dialogRef = this._dialog.open(AddEditTheaterComponent,{
      data : data,disableClose : true
    })

    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
              const id = Number(params['bmId'])
              this.getTheaterBybmIdData(id)
            }
          })
        }
      }
    })
  }




  deleteTheater(id:number){
    this._services.deleteTheater(id).subscribe({
      next : ()=>{
        this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getTheaterBybmIdData(id)
          }
        })
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

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { AddEditUpcomingComponent } from './add-edit-upcoming/add-edit-upcoming.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent {
  upcominglist!:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getUpcomingBybmIdData(id)
      }
    })
  }

  constructor(private _dialog:MatDialog,private _services : BranchManagerServiceService,
    private _route:ActivatedRoute){}


    getUpcomingBybmIdData(id:number){
      this._services.getUpcomingByBranchManagerId(id).subscribe(data => this.upcominglist = data)
    }


  openAddUpcomingForm(){
    const dialogRef = this._dialog.open(AddEditUpcomingComponent,{
      disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getUpcomingBybmIdData(id)
          }
    })
        }
      }
    })
  }

  openUpdateUpcomingForm(data:any){
    const dialogRef = this._dialog.open(AddEditUpcomingComponent,{
      disableClose : true,data : data
    })

    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getUpcomingBybmIdData(id)
          }
    })
        }
      }
    })
  }



  deleteUpcoming(id:number){
    this._services.deleteUpcoming(id).subscribe({
      next : ()=>{
        this._route.queryParams.subscribe(params =>{
        if(params['bmId']){
          const id = Number(params['bmId'])
          this.getUpcomingBybmIdData(id)
        }
    })
      }
    })
  }
}

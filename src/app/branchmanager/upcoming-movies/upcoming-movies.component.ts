import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { AddEditUpcomingComponent } from './add-edit-upcoming/add-edit-upcoming.component';


@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent {
  upcominglist!:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this.getUpcoming();
  }

  constructor(private _dialog:MatDialog,private _services : BranchManagerServiceService){}



  openAddUpcomingForm(){
    const dialogRef = this._dialog.open(AddEditUpcomingComponent,{
      disableClose : true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
          this.getUpcoming();
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
          this.getUpcoming();
        }
      }
    })
  }

  getUpcoming(){
    this._services.getUpcoming().subscribe({
      next : (resp)=>{
        this.upcominglist = resp
      }
    })
  }

  deleteUpcoming(id:number){
    this._services.deleteUpcoming(id).subscribe({
      next : ()=>{
        this.getUpcoming();
      }
    })
  }
}

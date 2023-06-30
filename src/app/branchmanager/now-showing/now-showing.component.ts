import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { AddEditNowShowingComponent } from './add-edit-now-showing/add-edit-now-showing.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent implements OnInit{

  NowShowingData:any
  enterSearchValue : string = ''
  theatersData : {theaterName:string,id:number}[] = []
  schedules:{date:string,startTime:string,endTime:string,nowShowingMovies:{id:number}} [] =[]
  finalData:{date:string,startTime:string,endTime:string,nowShowingMovies:{id:number}} [] =[]
  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getNowShowinggBybmIdData(id)
      }
    })
    console.log(this.NowShowingData);

  }

  constructor(private _service:BranchManagerServiceService,private _dialog:MatDialog,private _router:Router,
    private _route:ActivatedRoute,private _schedule:SchedulesService) {

  }

  // getTheaterDataById(id:number){
  //   this._service.getTheatersById(id).subscribe((data:any)=> {
  //     this.theatersData = data
  //   }
  //   )
  // }

  getNowShowinggBybmIdData(id:number){
    this._service.getNowShowingByBranchManagerId(id).subscribe(data => {
      this.NowShowingData = data;
      this.NowShowingData.forEach((element:any) => {
        // this.getTheaterDataById(element.theaterData)

        this._schedule.getScheduleByNowShowingMovieId(element.id).subscribe((data) =>{
          this.schedules =data

        })
      })

    })

  }

  openAddNowShowing(){
    const dialogRef = this._dialog.open(AddEditNowShowingComponent,{
      disableClose:true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
            this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
          }
    })
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
          this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
           }
    })
      }
    })
  }


  deleteCinema(id:number){
    this._service.deleteNowShowing(id).subscribe({
      next : ()=>{
          this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
          }
    })
      }
    })
  }

  // getTheaterName(nowShowingTheaterId:number){
  //   let gg = this.theatersData.find((ele)=> ele.id == nowShowingTheaterId )
  //   return gg ? gg.theaterName : ''
  // }

}

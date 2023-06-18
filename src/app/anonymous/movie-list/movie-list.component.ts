import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  enterSearchValue : string = ''
  ngOnInit(): void {
    this.nowShowing();
    this.upcoming();
  }

  constructor(private _service:BranchManagerServiceService,private _route: Router){}

  // Getting now showing data start
  nowShowingData?:any

  nowShowing(){
    this._service.getNowShowing().subscribe({
      next:(resp)=>{
        this.nowShowingData = resp
      }
    })
  }

  // Getting now showing data end

  // Routing Movie Detail start

  movieDetail(id:number){
    this._route.navigateByUrl(`/anonymous/movieDetail/${id}`)
  }

  // Routing Movie Detail start

  // Upcoming
  upcomingData?:any
  upcoming(){
    this._service.getUpcoming().subscribe({
      next:(resp)=>{
        this.upcomingData = resp
      }
    })
  }

  upcomingDetail(id:number){
    this._route.navigateByUrl(`/anonymous/upcomingDetail/${id}`)
  }

}

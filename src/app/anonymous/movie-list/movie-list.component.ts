import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
  ngOnInit(): void {
    this.nowShowing();
  }

  constructor(private _service:AnonymousServiesService,private _route: Router){}

  // Getting now showing data start
  nowShowingData:any

  nowShowing(){
    this._service.nowShowingList().subscribe({
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
}

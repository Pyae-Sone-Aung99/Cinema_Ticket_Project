import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  movieDetails:any

  ngOnInit(): void {
    let getParamId = this._route.snapshot.paramMap.get('id');
    this.getMovieDetail(getParamId)
  }

  constructor(private _route:ActivatedRoute,private _services:AnonymousServiesService){}

  getMovieDetail(id:any){
    this._services.getMovieDetails(id).subscribe({
      next : (resp)=>{
        this.movieDetails = resp
      }
    })
  }
}

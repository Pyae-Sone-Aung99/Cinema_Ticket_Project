import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {

  cinemaData:any

  ngOnInit(): void {
    this.getCinemaData()
  }

  constructor(private _services:AnonymousServiesService,private _router:Router){}

  getCinemaData(){
    this._services.getCinema().subscribe({
      next : (resp)=>{
        this.cinemaData = resp;
      }
    })
  }

  cinemaDetail(id:number){
    this._router.navigateByUrl(`/anonymous/cinemaDetail/${id}`)

  }
}

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AnonymousServiesService } from '../services/anonymous-servies.service';
import { Router } from '@angular/router';
import { BranchManagerServiceService } from '../services/branch-manager-service.service';


@Component({
  selector : 'app-anonymous',
  templateUrl : './anonymous-component.html',
  styleUrls : ['./anonymous-component.scss']
})

export class AnonymousComponent implements OnInit{

  ngOnInit(): void {
    this.showingMoviesData();
    this._router.navigateByUrl('/anonymous/movielist')
  }

  constructor(private _serviecs : BranchManagerServiceService,private _router:Router){}

  // Nav Bar Start (@HostListener allows you to define event handlers directly within your component or directive class.)
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#AEAFC2'
      }
    }else
    {
        this.navbg = {}
    }
  }
  // Nav Bar End


  // Getting Showing movies start

    showingMovies:any

    showingMoviesData(){
      this._serviecs.getNowShowing().subscribe({
        next : (resp)=>{
          this.showingMovies = resp
        }
      })
    }

  // Getting Showing movies end


}

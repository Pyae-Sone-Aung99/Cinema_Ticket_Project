import { Component, HostListener, OnInit } from '@angular/core';
import { AnonymousServiesService } from '../services/anonymous-servies.service';

@Component({
  selector : 'app-anonymous',
  templateUrl : './anonymous-component.html',
  styleUrls : ['./anonymous-component.scss']
})

export class AnonymousComponent implements OnInit{

  ngOnInit(): void {
    this.showingMoviesData();
  }

  constructor(private _serviecs : AnonymousServiesService){}

  // Nav Bar Start (@HostListener allows you to define event handlers directly within your component or directive class.)
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
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
      this._serviecs.nowShowingList().subscribe({
        next : (resp)=>{
          this.showingMovies = resp
        }
      })
    }

  // Getting Showing movies end

  // Scolling behaviour to upcoming tag start
  scrollToUpcoming(){
    const upcoming = document.getElementById('upcoming');
    if (upcoming) {
      upcoming.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // Scolling behaviour to upcoming tag end

  // Scrolling behaviour to now showing start
  scrollToNowShowing(){
    const nowshowing = document.getElementById('nowshowing');
    if (nowshowing) {
      nowshowing.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // Scrolling behaviour to now showing end
}

import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  cinema? = true
  movieDetails:any




  ngOnInit(): void {
    let getParamId = this._route.snapshot.paramMap.get('id');
    this.getMovieDetail(getParamId)
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);
  }

  constructor(private _route:ActivatedRoute,private _services:AnonymousServiesService,
    private renderer: Renderer2){}

  getMovieDetail(id:any){
    this._services.getMovieDetails(id).subscribe({
      next : (resp)=>{
        this.movieDetails = resp
      }
    })
  }

  goTrailer(){
    this.cinema = !this.cinema
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

}

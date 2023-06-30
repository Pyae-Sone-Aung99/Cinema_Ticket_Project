import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';
import { PaymentService } from 'src/app/services/payment.service';
import { SchedulesService } from 'src/app/services/schedules.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  cinema? = true
  movieDetails:any
  trailer? : any
  theaterData : any
  cinemaData : any
  date: any
  startTime : any
  endTime : any


  ngOnInit(): void {
    let getParamId = this._route.snapshot.paramMap.get('id');
    this.getMovieDetail(getParamId)
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);
  }

  constructor(private _route:ActivatedRoute,private _services:AnonymousServiesService,
    private renderer: Renderer2,private _sanitizer: DomSanitizer,private _bmServices:BranchManagerServiceService,
    private _cmServices:CompanymanagerServicesService,private _payment:PaymentService,private _schedule:SchedulesService){}

  getMovieDetail(id:any){
    this._services.getMovieDetails(id).subscribe({
      next : (resp)=>{
        this.trailer = this.sanitizeUrl( resp.trailer)
        this.movieDetails = resp

        this._schedule.getScheduleByNowShowingMovieId(this.movieDetails.id).subscribe( data => {
          for(let item of data){
            this.date = item.date,
            this.startTime = item.startTime,
            this.endTime = item.endTime
          }
          // data.foreach((ele:any) => {
          //   this.date = ele.date
          //   this.startTime = ele.startTime,
          //   this.endTime = ele.endTime
          // })
        }
        )
        this._payment.selectedMovie = this.movieDetails.title
        this._payment.date = this.date
        this._payment.startTime = this.startTime
        this._payment.endTime = this.endTime
        this.getTheaterData(this.movieDetails.theater.id)
      }
    })
  }

  getCinemaDetail(id:number){
    this._cmServices.getCinemaByBmId(id).subscribe({
      next : (resp)=>{
        this.cinemaData = resp
      }
    })
  }

  getTheaterData(id:any){
    this._bmServices.getTheatersByMovieId(id).subscribe({
      next : (resp)=>{
        this.theaterData = resp
        this.getCinemaDetail(this.theaterData.cinema.id)
      }
    })
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
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

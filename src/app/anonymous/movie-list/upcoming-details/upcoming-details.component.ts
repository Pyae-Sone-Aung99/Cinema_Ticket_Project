import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';

@Component({
  selector: 'app-upcoming-details',
  templateUrl: './upcoming-details.component.html',
  styleUrls: ['./upcoming-details.component.scss']
})
export class UpcomingDetailsComponent implements OnInit{

  upcomingDetails:any
  trailer? : any


  ngOnInit(): void {
    let getParamId = this._route.snapshot.paramMap.get('id');
    this.getUpcomingDetails(getParamId)
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
  }

  constructor(private _services:AnonymousServiesService,private renderer: Renderer2,
    private _sanitizer: DomSanitizer,private _route:ActivatedRoute) {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

  getUpcomingDetails(id:any){
    this._services.getUpcomingDetails(id).subscribe({
      next : (resp)=>{
        this.trailer = this.sanitizeUrl( resp.trailer)
        this.upcomingDetails = resp
      }
    })
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);
  }

  constructor(private renderer:Renderer2,private _route:Router){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

  goReceipt(){
    this._route.navigateByUrl('/anonymous/voucher')
  }

}

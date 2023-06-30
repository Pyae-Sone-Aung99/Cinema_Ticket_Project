import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm : FormGroup
  seatNo : any
  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);
    console.log(this._payment);
    this.seatNo = this._payment.seatNo
  }

  constructor(private renderer:Renderer2,private _route:Router,private _payment:PaymentService,
    private _builder:FormBuilder){
      this.paymentForm = _builder.group({
        name : ['',Validators.required],
        phoneNumber : ['',Validators.required],
        email : ['',Validators.required],
        movieName : _payment.selectedMovie,
        theaterName : _payment.cinemaName,
        startTime : _payment.startTime,
        endTime : _payment.endTime,
        date : _payment.date,
        paymentMethod : ['',Validators.required],
        totalAmount : _payment.totalAmount,
        seatNo : {...this._payment.seatNo}
      })
    }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

  onSubmit(){
    if(this.paymentForm.valid){
      console.log(this.paymentForm.value);

    }
  }

}

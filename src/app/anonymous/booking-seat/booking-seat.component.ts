import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { PaymentService } from 'src/app/services/payment.service';
import { SchedulesService } from 'src/app/services/schedules.service';
import { SeatsService } from 'src/app/services/seats.service';

declare const bootstrap:any

@Component({
  selector: 'app-booking-seat',
  templateUrl: './booking-seat.component.html',
  styleUrls: ['./booking-seat.component.scss']
})
export class BookingSeatComponent implements OnInit {

  theater:any
  selectedSeats:any[] = []
  // check:boolean = false
  seats:any

  ngOnInit(): void {

    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);

    this._route.queryParams.subscribe(params =>{
      if(params['id']){
        const id = Number(params['id'])
        this._service.getTheatersByMovieId(id).subscribe(result => {
          console.log(result);
          this._schedule.getSeatByTheaterId(result.id).subscribe(result =>{
            this.seats = result
            console.log(this.seats);

          })
          this.theater = result.find( (ele:any)=> ele.id == id )
          this._payment.cinemaName = this.theater.theatreName
        })
      }
    })
  }

  constructor(private renderer: Renderer2, private _service:BranchManagerServiceService, private _route:ActivatedRoute,
    private _router:Router,private _payment: PaymentService,private _schedule:SeatsService){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

  selectSeat(seatNo:any, price:any) {

    if(this.selectedSeats.length) {

      let check = false

      for(let s of this.selectedSeats) {
        if(s.name == seatNo)
          check = true
      }

      if(!check) {
        this.selectedSeats.push({name: seatNo, price: price})
      } else {
        this.deselect({name: seatNo, price: price}, false)
      }

    } else {
      this.selectedSeats.push({name: seatNo, price: price})
    }
  }

  deselect(seat:any, btnClick:boolean) {
    let index = 0

    for(let s of this.selectedSeats) {
      if(s.name == seat.name)
        index = this.selectedSeats.indexOf(s)
    }

    if(index > -1)
      this.selectedSeats.splice(index, 1)

    if(btnClick) {
      const no = (+((seat.name as string).substring(1)) - 1) + ''
      const letter = (seat.name as string).charAt(0)
      const seatId = letter.concat('seat').concat(no)

      new bootstrap.Button(`#${seatId}`).toggle()
    }

  }

  get total() {
    let total = 0
    for(let s of this.selectedSeats)
      total += s.price
    this._payment.totalAmount = total
    return total
  }

  goToPayment(){
    console.log(this.selectedSeats);
    this._payment.seatNo = this.selectedSeats

    this._router.navigateByUrl('/anonymous/payment')
  }

}

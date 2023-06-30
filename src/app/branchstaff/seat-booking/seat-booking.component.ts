import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnonymousServiesService } from 'src/app/services/anonymous-servies.service';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { SeatsService } from 'src/app/services/seats.service';

declare const bootstrap:any
interface Movie{
  id:number;
  theaterData :string;
  bmId : number;
  title : string;
  theater : {
    id:number
  }
}
@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent {
  seats:any
  selectedSeats:any[] = []
  check:boolean = false
  movieData :any
  movieTitle? : string

  ngOnInit(): void {


    this.route.queryParamMap.subscribe(param => {
      if(param.get('id')) {
        this._anonymousService.getMovieDetails(param.get('id')).subscribe((data:Movie) => {
            this.movieData = data
            this.getTheaterByMovieIdData(data.theater.id)
        })
      }
    })
  }

  constructor(private _service:SeatsService, private route:ActivatedRoute,
    private _router:Router,private _anonymousService:AnonymousServiesService){}

    getTheaterByMovieIdData(id:number){
      this._service.getSeatByTheaterId(id).subscribe(data =>{
        this.seats = data
      }
      )
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
    return total
  }

  goToPayment(){
    console.log(this.selectedSeats);

    this._router.navigateByUrl('/anonymous/payment')
  }

}

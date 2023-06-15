import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-seat',
  templateUrl: './booking-seat.component.html',
  styleUrls: ['./booking-seat.component.scss']
})
export class BookingSeatComponent implements OnInit {

  seatLevels = [
    { level : 'a', count : 10 , price : 5000},
    { level : 'b', count : 10 , price : 6000},
    { level : 'c', count : 10 , price : 7000},
  ]

  ngOnInit(): void {
    this.renderer.setProperty(document.documentElement, 'scrollTop', 1);
    window.scrollTo(0, 1);

  }

  constructor(private renderer: Renderer2,private _route : Router){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

// Generation Seat to ui
  generateSeats(count: number, price: number): any[] {
    const seats = [];
    for (let i = 1; i <= count; i++) {
      seats.push({ id: i, available: true, price: price });
    }
    return seats;
  }

  // Selecting seat

  selectedSeats: any[] = [];

  selectSeat(seat: any): void {
    if (seat.available) {
      if (this.isSeatSelected(seat)) {
        this.deselectSeat(seat);
      } else {
        this.selectedSeats.push(seat);
      }
    }
  }
  // For Checking same seat in two time
  isSeatSelected(seat: any): boolean {
    return this.selectedSeats.some(selectedSeat => selectedSeat.id === seat.id);
  }

  // For Deselecting selected seat
  deselectSeat(seat: any): void {
    this.selectedSeats = this.selectedSeats.filter(selectedSeat => selectedSeat.id !== seat.id);
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const seat of this.selectedSeats) {
      totalPrice += seat.price;
    }
    return totalPrice;
  }

  goPayment(){
    this._route.navigateByUrl("/anonymous/payment")
  }

}

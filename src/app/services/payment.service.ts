import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements OnInit{
  selectedMovie! : string
  date!: string
  startTime! : string
  endTime!: string
  cinemaName! : string;
  seatNo:any
  totalAmount :any

  ngOnInit(): void {

  }
  constructor() { }
}

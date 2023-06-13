import { Component } from '@angular/core';

interface Seat {
  label: string;
  selected: boolean;
  booked: boolean;
}

interface SeatRow {
  seats: Seat[];
}

@Component({
  selector: 'app-sell-seat',
  templateUrl: './sell-seat.component.html',
  styleUrls: ['./sell-seat.component.scss']
})
export class SellSeatComponent {
  seatRows: SeatRow[] = [
    { seats: [{ label: 'A1', selected: false, booked: false }, { label: 'A2', selected: false, booked: true }, { label: 'A3', selected: false, booked: false }] },
    { seats: [{ label: 'B1', selected: false, booked: false }, { label: 'B2', selected: false, booked: false }, { label: 'B3', selected: false, booked: false }] },
    // Add more seat rows as needed
  ];

  selectedSeats: Seat[] = [];

  toggleSeatSelection(row: SeatRow, seat: Seat) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
      if (seat.selected) {
        this.selectedSeats.push(seat);
      } else {
        const index = this.selectedSeats.indexOf(seat);
        if (index !== -1) {
          this.selectedSeats.splice(index, 1);
        }
      }
    }
  }
}

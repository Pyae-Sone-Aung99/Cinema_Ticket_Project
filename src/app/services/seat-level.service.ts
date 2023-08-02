import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatLevelService {

  constructor(private _http:HttpClient) { }


  getSeatLevelByTheaterId(id:number):Observable<any>{
    const url = 'http://localhost:8080/seatLevel'
    const params = {theaterId:id}
    return this._http.get<any>(url,{params} )
  }
}

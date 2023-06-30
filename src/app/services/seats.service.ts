import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  constructor(private _http:HttpClient) { }

  getSeatByTheaterId(id:number):Observable<any>{
    const url = 'http://localhost:8080/seats'
    const params = {theaterId:id}
    return this._http.get<any>(url,{params} )
  }
}

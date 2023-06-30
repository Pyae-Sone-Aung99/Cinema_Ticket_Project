import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonymousServiesService {

  constructor(private _http:HttpClient) { }


  getMovieDetails(data: any): Observable<any> {
    return this._http.get(`http://localhost:8080/nowshowing/details/${data}`)
  }


  getUpcomingDetails(data: any): Observable<any> {
    return this._http.get(`http://localhost:8080/upcoming/details/${data}`)
  }


}

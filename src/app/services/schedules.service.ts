import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private _http:HttpClient) { }

  getScheduleByNowShowingMovieId(id:number):Observable<any>{
    return this._http.get(`http://localhost:8080/schedules/${id}`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanymanagerServicesService {

  constructor(private _http: HttpClient) { }

  addCinema(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/cinema',data);
  }

  deleteCinema(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/cinema/${id}`);
  }

  updateCinema(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/cinema/${id}`,data);
  }

  getCinemalistById(id:number):Observable<any>{
    const url = 'http://localhost:3000/cinema'
    const params = {cmId:id}
    return this._http.get<any>(url,{params} )
  }

  getCinemaByBmId(id:number):Observable<any>{
    const url = 'http://localhost:3000/cinema'
    const params = {id:id}
    return this._http.get<any>(url,{params} )
  }
}

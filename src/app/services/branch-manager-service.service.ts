import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchManagerServiceService {

  constructor(private _http : HttpClient) { }

  addStaff(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/staff',data);
  }

  getStaff():Observable<any>{
    return this._http.get('http://localhost:3000/staff');
  }

  deleteStaff(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/staff/${id}`);
  }

  updateStaff(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/staff/${id}`,data);
  }

  // Theater
  addTheater(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/theater',data);
  }

  getTheater():Observable<any>{
    return this._http.get('http://localhost:3000/theater');
  }

  deleteTheater(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/theater/${id}`)
  }

  updateTheater(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/theater/${id}`,data);
    // Theater End
  }
}

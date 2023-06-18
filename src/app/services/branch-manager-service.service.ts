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

  getStaffByBranchManagerId(id:number):Observable<any>{
    const url = 'http://localhost:3000/staff'
    const params = {bmId:id}
    return this._http.get<any>(url,{params} )
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

  // this is using branch manager id
  getTheatersById(id:number):Observable<any>{
    const url = 'http://localhost:3000/theater'
    const params = {bmId:id}
    return this._http.get<any>(url,{params} )
  }

  // this is using movie theaterdata ထဲက theater id
  getTheatersByMovieId(id:number):Observable<any>{
    const url = 'http://localhost:3000/theater'
    const params = {id:id}
    return this._http.get<any>(url,{params} )
  }

  deleteTheater(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/theater/${id}`)
  }

  updateTheater(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/theater/${id}`,data);

  }
  // Theater End

  // Now Showing
  addNowShowing(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/nowshowing',data);
  }

  getNowShowing():Observable<any>{
    return this._http.get('http://localhost:3000/nowshowing');
  }

  getNowShowingByMovieId(id:any):Observable<any>{
    const url = 'http://localhost:3000/nowshowing'
    const params = {id:id}
    return this._http.get(url,{params});
  }

  getNowShowingByBranchManagerId(id:number):Observable<any>{
    const url = 'http://localhost:3000/nowshowing'
    const params = {bmId:id}
    return this._http.get<any>(url,{params} )
  }


  deleteNowShowing(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/nowshowing/${id}`)
  }

  updateNowShowing(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/nowshowing/${id}`,data);
  }

  // Now Showing End

  // Upcoming Start
  addUpcoming(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/upcoming',data);
  }

  getUpcoming():Observable<any>{
    return this._http.get('http://localhost:3000/upcoming');
  }

  getUpcomingByBranchManagerId(id:number):Observable<any>{
    const url = 'http://localhost:3000/upcoming'
    const params = {bmId:id}
    return this._http.get<any>(url,{params} )
  }


  deleteUpcoming(id:number):Observable<any>{
    return this._http.delete(`http://localhost:3000/upcoming/${id}`)
  }

  updateUpcoming(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/upcoming/${id}`,data);
  }

  // Upcoming End
}

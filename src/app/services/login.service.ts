import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  loginStatus : any = false
  loggedInUserId ?: any
  loggedStaffBmId :any

  getBranchManagerAccount():Observable<any>{
    return this._http.get('http://localhost:8080/cinema');
  }

  getStaffAccount():Observable<any>{
    return this._http.get('http://localhost:8080/staff');
  }


  login(data:any){

  }

  getLoggedInUserId(): string {
    return this.loggedInUserId;
  }

  getloggedStaffBmId(): string {
    return this.loggedStaffBmId;
  }
}

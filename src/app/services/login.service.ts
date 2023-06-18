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

  // getCompanyManagerAccount():Observable<any>{
  //   return this._http.get('http://localhost:3000/companymanager'); //same with superadmin service
  // }

  // sure only one api
  getBranchManagerAccount():Observable<any>{
    return this._http.get('http://localhost:3000/cinema');
  }

  // sure only one api
  getStaffAccount():Observable<any>{
    return this._http.get('http://localhost:3000/staff');
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

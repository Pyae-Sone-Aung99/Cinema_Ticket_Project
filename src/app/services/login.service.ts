import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  loginStatus : any = true

  getCompanyManagerAccount():Observable<any>{
    return this._http.get('http://localhost:3000/companymanager');
  }

  getBranchManagerAccount():Observable<any>{
    return this._http.get('http://localhost:3000/cinema');
  }

  getStaffAccount():Observable<any>{
    return this._http.get('http://localhost:3000/staff');
  }


  login(data:any){

  }

}

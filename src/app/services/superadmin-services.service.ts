import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperadminServicesService {

  constructor(private _http: HttpClient) { }


  // getEmployeeList():Observable<any>{
  //   return this._http.get('http://localhost:3000/employees');
  // }

  // deleteEmployee(id:number):Observable<any>{
  //   return this._http.delete(`http://localhost:3000/employees/${id}`);
  // }

  // updateEmployee(id:number,data:any):Observable<any>{
  //   return this._http.put(`http://localhost:3000/employees/${id}`,data);
  // }

    addCompanyManager(data:any):Observable<any>{
      return this._http.post('http://localhost:3000/companymanager',data);
    }

    getCompanyManagerList():Observable<any>{
      return this._http.get('http://localhost:3000/companymanager');
    }

    deleteCompanyManager(id:number):Observable<any>{
      return this._http.delete(`http://localhost:3000/companymanager/${id}`);
    }

    updateCompanyManager(id:number,data:any):Observable<any>{
      return this._http.put(`http://localhost:3000/companymanager/${id}`,data);
    }
}

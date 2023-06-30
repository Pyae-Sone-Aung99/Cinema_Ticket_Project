import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperadminServicesService {

  constructor(private _http: HttpClient) { }


    addCompanyManager(data:any):Observable<any>{
      return this._http.post('http://localhost:8080/companymanager',data);
    }

    getCompanyManagerList():Observable<any>{
      return this._http.get('http://localhost:8080/companymanager');
    }

    deleteCompanyManager(id:number):Observable<any>{
      return this._http.delete(`http://localhost:8080/companymanager/${id}`);
    }

    updateCompanyManager(id:number,data:any):Observable<any>{
      return this._http.put(`http://localhost:8080/companymanager/${id}`,data);
    }
}

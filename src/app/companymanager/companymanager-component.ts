import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector : 'app-company-manager',
  templateUrl: './companymanager-component.html',
  styleUrls : ['./companymanager-component.scss']
})

export class CompanymanagerComponent implements OnInit{

  managerId ?: any = this._loginServices.getLoggedInUserId()
  ngOnInit(): void {
    if(!this._service.loginStatus){
      this._router.navigateByUrl('login')
    }else{
      this._router.navigate(['/companymanager/cinemalist'],{queryParams : {cmId : this._loginServices.getLoggedInUserId()}})
    }

  }

  constructor(private _service:LoginService,private _router:Router,
    private _loginServices : LoginService) {

  }

  logout(){
    this._service.loginStatus = false
    this._router.navigateByUrl('login')

  }

}

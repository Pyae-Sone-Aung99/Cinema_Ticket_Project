import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-branch-manager',
  templateUrl : './branchmanager-component.html',
  styleUrls : ['./branchmanager-component.scss']
})

export class BranchmanagerComponent implements OnInit{
  bmManagerId ?: any = this._loginServices.getLoggedInUserId()

  ngOnInit(): void {
    if(!this._service.loginStatus){
      this._router.navigateByUrl('login')
    }else{
      this._router.navigate(['/branchmanager/theaterlist'],{queryParams : {bmId : this._loginServices.getLoggedInUserId()}})
    }

  }

  constructor(private _service : LoginService,private _router : Router,
    private _loginServices : LoginService) {

  }

  logout(){
    this._service.loginStatus = false
    this._router.navigateByUrl('login')

  }
}

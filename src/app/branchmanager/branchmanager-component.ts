import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-branch-manager',
  templateUrl : './branchmanager-component.html',
  styleUrls : ['./branchmanager-component.scss']
})

export class BranchmanagerComponent implements OnInit{
  ngOnInit(): void {
    if(!this._service.loginStatus){
      this._router.navigateByUrl('login')
    }
    this._router.navigateByUrl("/branchmanager/theaterlist")
  }

  constructor(private _service : LoginService,private _router : Router) {

  }

  logout(){
    this._service.loginStatus = false
    this._router.navigateByUrl('login')

  }
}

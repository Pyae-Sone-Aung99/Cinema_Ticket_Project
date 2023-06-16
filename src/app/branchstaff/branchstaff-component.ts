import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector : 'app-branch-staff',
  templateUrl: './branchstaff-component.html',
  styleUrls : ['./branchstaff-component.scss']
})

export class BranchstaffComponent implements OnInit{
  ngOnInit(): void {
    if(!this._service.loginStatus){
      this._router.navigateByUrl('login')
    }
  }

  constructor(private _service:LoginService,private _router:Router) {

  }

  logout(){
    this._service.loginStatus = false
    this._router.navigateByUrl('login')

  }
}

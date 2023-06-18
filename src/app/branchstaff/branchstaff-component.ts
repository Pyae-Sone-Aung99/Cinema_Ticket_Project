import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector : 'app-branch-staff',
  templateUrl: './branchstaff-component.html',
  styleUrls : ['./branchstaff-component.scss']
})

export class BranchstaffComponent implements OnInit{
  staffId :any = this._service.getLoggedInUserId() //this is staff id
  bmId : any = this._service.getloggedStaffBmId()

  ngOnInit(): void {
    if(!this._service.loginStatus){
      this._router.navigateByUrl('login')
    }else{
      this._router.navigate(['/branchstaff/nowshowing'],{queryParams : {bmId : this._service.getloggedStaffBmId(),staffId : this._service.getLoggedInUserId()}})
    }
  }

  constructor(private _service:LoginService,private _router:Router,
    private _loginServices:LoginService) {
  }

  logout(){
    this._service.loginStatus = false
    this._router.navigateByUrl('login')

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SuperadminServicesService } from 'src/app/services/superadmin-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm : FormGroup
  companymanageraccount! : {username:string,password:string,role:string,id:number}[]
  branchmanageraccount! : {bmName:string,bmPassword:string,role:string,id:number}[]
  staffaccount! : {username:string,password:string,role:string,id:number,bmId:number}[]


  ngOnInit(): void {
    this._superAdminService.getCompanyManagerList().subscribe({
      next : (resp)=>{
        this.companymanageraccount = resp
      }
    })
    this._services.getBranchManagerAccount().subscribe({
      next : (resp)=>{
        this.branchmanageraccount = resp
      }
    })
    this._services.getStaffAccount().subscribe({
      next : (resp)=>{
        this.staffaccount = resp
      }
    })

  }



  constructor(private builder : FormBuilder , private router : Router,private _services:LoginService,
    private _superAdminService:SuperadminServicesService){
    this.loginForm = this.builder.group({
      username : ['',[Validators.required]],
      password : ['', Validators.required ]
    })
  }




  onSubmit() : void {

    const loggedCompanyManager = this.companymanageraccount.find(e => e.username.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
        this.companymanageraccount.find(e => e.password === this.loginForm.value.password)
    if(loggedCompanyManager && loggedCompanyManager.role === 'companymanager'){
      this._services.loginStatus = true
      this._services.loggedInUserId = loggedCompanyManager.id
      this.router.navigate(['/companymanager/cinemalist'],{queryParams : {cmId : this._services.getLoggedInUserId()}})
    }

    const loggedBranchManager = this.branchmanageraccount.find(e=> e.bmName.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
      this.branchmanageraccount.find(e => e.bmPassword === this.loginForm.value.password)
    if(loggedBranchManager && loggedBranchManager.role === 'branchmanager'){
      this._services.loginStatus = true
      this._services.loggedInUserId = loggedBranchManager.id
      this.router.navigate(['/branchmanager/theaterlist'],{queryParams : {bmId : this._services.getLoggedInUserId()}})
    }

    const loggedStaff = this.staffaccount.find(e=> e.username.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
    this.staffaccount.find(e => e.password.toLowerCase() === this.loginForm.value.password.toLowerCase())
    if(loggedStaff && loggedStaff.role === "staff" ){
      this._services.loginStatus = true
      this._services.loggedInUserId = loggedStaff.id
      this._services.loggedStaffBmId = loggedStaff.bmId
      this.router.navigate(['/branchstaff/nowshowing'],{queryParams : {bmId : loggedStaff.bmId,staffId : loggedStaff.id}})

    }

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm : FormGroup
  companymanageraccount! : {username:string,password:string,role:string}[]
  branchmanageraccount! : {bmName:string,bmPassword:string,role:string}[]
  staffaccount! : {username:string,password:string,role:string}[]


  ngOnInit(): void {
    this._services.getCompanyManagerAccount().subscribe({
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



  constructor(private builder : FormBuilder , private router : Router,private _services:LoginService){
    this.loginForm = this.builder.group({
      username : ['',[Validators.required]],
      password : ['', Validators.required ]
    })
  }




  onSubmit() : void {

   if( this.companymanageraccount.find(e => e.username.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
    this.companymanageraccount.find(e => e.password === this.loginForm.value.password)){
// right here we can also validate with role
      this._services.loginStatus = true
      this.router.navigateByUrl('/companymanager/cinemalist')

   }else if(this.branchmanageraccount.find(e => e.bmName.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
    this.branchmanageraccount.find(e => e.bmPassword === this.loginForm.value.password)){
      this._services.loginStatus = true
      this.router.navigateByUrl('/branchmanager/theaterlist')
    }else if(this.staffaccount.find(e => e.username.toLowerCase() === this.loginForm.value.username.toLowerCase()) &&
    this.staffaccount.find(e => e.password === this.loginForm.value.password)){
      this._services.loginStatus = true
      this.router.navigateByUrl('/branchstaff')
    }else{
      console.log("error");
    }


  }
}
    // if(this.loginForm.valid){
    //   if ( this.loginForm.value.username === 'company@gmail.com' && this.loginForm.value.password === 'company'){
    //      this.router.navigateByUrl('/companymanager/branchmanager')
    //   }

    // }
// else if (this.loginForm.value.username === 'branch@gmail.com' && this.loginForm.value.password === 'branch'){
//   this.router.navigate(['branchmanager/theaterlist'])
// }else if (this.loginForm.value.username === 'staff@gmail.com' && this.loginForm.value.password === 'staff'){
// this.router.navigate(['/branchstaff'])
// }else{
// console.log("error");

// }

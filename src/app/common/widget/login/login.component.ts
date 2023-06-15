import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm : FormGroup

  constructor(private builder : FormBuilder , private router : Router){
    this.loginForm = this.builder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['', Validators.required ]
    })
  }

  onSubmit() : void {

    if(this.loginForm.valid){
      if ( this.loginForm.value.email === 'company@gmail.com' && this.loginForm.value.password === 'company'){
         this.router.navigateByUrl('/companymanager/branchmanager')
      }else if (this.loginForm.value.email === 'branch@gmail.com' && this.loginForm.value.password === 'branch'){
          this.router.navigate(['branchmanager/theaterlist'])
      }else if (this.loginForm.value.email === 'staff@gmail.com' && this.loginForm.value.password === 'staff'){
        this.router.navigate(['/branchstaff'])
      }else{
        console.log("error");

      }

    }
  }
}

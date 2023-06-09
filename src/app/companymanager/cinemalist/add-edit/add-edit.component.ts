import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit{

  cinemaForm:FormGroup


  ngOnInit(): void {
    this.cinemaForm.patchValue(this.data)

  }

  constructor(private _builder:FormBuilder,private _services: CompanymanagerServicesService,
    private _dialogRef : MatDialogRef<AddEditComponent>,@Inject(MAT_DIALOG_DATA)public data : any,
    private _loginServices : LoginService
   ){
    this.cinemaForm = this._builder.group({
      cinemaName : ['',Validators.required],
      location : ['',Validators.required],
      phoneNumber : ['',[Validators.required,Validators.minLength(8)]],
      userName : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(4)]],
      role : ['branchmanager'],
      companyId : [this._loginServices.getLoggedInUserId(),Validators.required]
    })
  }



  onSubmit(){
    if (this.cinemaForm.valid){
      if(this.data){
        this._services.updateCinema(this.data.id,this.cinemaForm.value).subscribe({
          next : (val : any)=>{
            this._dialogRef.close(true)
          }
        })
      }else{
        this._services.addCinema(this.cinemaForm.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          }
        })

    }
    }
  }
}

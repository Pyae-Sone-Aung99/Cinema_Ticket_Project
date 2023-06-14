import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuperadminServicesService } from 'src/app/services/superadmin-services.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit{
  companymanager:FormGroup

  ngOnInit(): void {
    this.companymanager.patchValue(this.data)
  }

  constructor(private _builder:FormBuilder,private _services:SuperadminServicesService,
    private _dialogRef:MatDialogRef<AddEditComponent>,@Inject(MAT_DIALOG_DATA)public data :any){
    this.companymanager = this._builder.group({

      companyName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      phoneNumber : ['',[Validators.required,Validators.minLength(8)]],
      username: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(4)]]

    })
  }

  onSubmit(){
    if(this.companymanager.valid){

      if (this.data){
        //this is updating
        this._services.updateCompanyManager(this.data.id,this.companymanager.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          },
          error : (err:any)=>{
            console.error(err);

          }
        })
      }else{
        // this is adding
        this._services.addCompanyManager(this.companymanager.value).subscribe({
        next : (val:any)=>{
          this._dialogRef.close(true)
        },
        error : (err:any)=>{
          console.log(err);
        }
      })
      }

    }
  }
}

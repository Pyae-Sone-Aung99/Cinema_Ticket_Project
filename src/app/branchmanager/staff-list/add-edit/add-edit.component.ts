import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit{
  staffForm:FormGroup

  ngOnInit(): void {
    this.staffForm.patchValue(this.data)
  }

  constructor(private _builder:FormBuilder,private _services : BranchManagerServiceService,
    private _dialogRef: MatDialogRef<AddEditComponent>,@Inject(MAT_DIALOG_DATA)public data :any){
    this.staffForm = this._builder.group({
      staffName : ['',Validators.required],
      phoneNumber : ['',[Validators.required,Validators.minLength(8)]],
      email : ['',[Validators.required,Validators.email]],
      username : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(4)]],
      role : ['staff']
    })
  }

  onSubmit(){
    if(this.staffForm.valid){
      if (this.data){
        this._services.updateStaff(this.data.id,this.staffForm.value).subscribe({
          next : (val)=>{
            this._dialogRef.close(true)
          }
        })
      }else{
        this._services.addStaff(this.staffForm.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          }
        })
      }
    }
  }
}

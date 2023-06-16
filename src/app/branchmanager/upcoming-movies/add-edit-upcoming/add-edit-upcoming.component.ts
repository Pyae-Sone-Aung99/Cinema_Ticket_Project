import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-add-edit-upcoming',
  templateUrl: './add-edit-upcoming.component.html',
  styleUrls: ['./add-edit-upcoming.component.scss']
})
export class AddEditUpcomingComponent implements OnInit{

  upcomingForm:FormGroup

  ngOnInit(): void {
    this.upcomingForm.patchValue(this.data)
  }

  constructor(private _builder:FormBuilder,private _services: BranchManagerServiceService,
    private _dialogRef : MatDialogRef<AddEditUpcomingComponent>,@Inject(MAT_DIALOG_DATA)public data : any){
    this.upcomingForm = this._builder.group({
      upcomingname : ['',Validators.required],
      production : ['',[Validators.required]],
      cast : ['',Validators.required],
      trailer : ['',Validators.required],
      date : ['',Validators.required],
      duration : ['',Validators.required],
      plot : ['',[Validators.required]],
      type : ['',Validators.required],
      poster : ['',Validators.required]
    })
  }



  onSubmit(){
    if (this.upcomingForm.valid){
      if(this.data){
        this._services.updateUpcoming(this.data.id,this.upcomingForm.value).subscribe({
          next : (val : any)=>{
            this._dialogRef.close(true)
          }
        })
      }else{
        this._services.addUpcoming(this.upcomingForm.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          }
        })
    }
    }
  }
}

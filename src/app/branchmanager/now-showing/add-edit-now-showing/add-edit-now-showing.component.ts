import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';



@Component({
  selector: 'app-add-edit-now-showing',
  templateUrl: './add-edit-now-showing.component.html',
  styleUrls: ['./add-edit-now-showing.component.scss']
})
export class AddEditNowShowingComponent implements OnInit{

  movieForm:FormGroup
  theaterData:any
  availableTimes: [] = [];

  ngOnInit(): void {
    this.getShowTimeOfTheater()
    this.movieForm.patchValue(this.data);
  }

  constructor(private _services: BranchManagerServiceService,private _builder:FormBuilder,
    private _dialogRef:MatDialogRef<AddEditNowShowingComponent>,@Inject(MAT_DIALOG_DATA)public data : any){
    this.movieForm = this._builder.group({
      title : ['',Validators.required],
      poster : ['',Validators.required],
      theaterData : ['',Validators.required],
      selectedTimes : ['',Validators.required],
      duration : ['',Validators.required],
      plot: ['',Validators.required],
      type : ['',Validators.required],
      trailer : ['',Validators.required]
    })
  }

  getShowTimeOfTheater(){
    this._services.getTheater().subscribe({
      next : (resp)=>{
        this.theaterData = resp
      }
    })
  }

  onChangeTheater() {
    const selectTheaterId = this.movieForm.value.theaterData;

    const time = this.theaterData.filter((t:any) => t.id == selectTheaterId)
                    .map((t:any) => t.selectedTimes)
    this.availableTimes = time
    console.log(this.availableTimes);

  }

  onSubmit(){
    if (this.movieForm.valid){
      if(this.data){
        this._services.updateNowShowing(this.data.id,this.movieForm.value).subscribe({
          next : (val : any)=>{
            this._dialogRef.close(true)
          }
        })
      }else{
        this._services.addNowShowing(this.movieForm.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          }
        })
    }
    }

  }

}

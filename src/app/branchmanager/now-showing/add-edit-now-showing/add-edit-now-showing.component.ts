import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-add-edit-now-showing',
  templateUrl: './add-edit-now-showing.component.html',
  styleUrls: ['./add-edit-now-showing.component.scss']
})
export class AddEditNowShowingComponent implements OnInit{

  movieForm:FormGroup
  theaterData:any
  // availableTimes: [] = [];
  bmManagerId ?: any = this._loginServices.getLoggedInUserId()

  ngOnInit(): void {
    this.getAvailableTheater(this.bmManagerId)
    this.movieForm.patchValue(this.data);
    if (this.data) {
      for (const time of this.data.selectedTimes) {
        this.addTime();
      }
    } else {
      this.addTime();
    }
  }

  constructor(private _services: BranchManagerServiceService,private _builder:FormBuilder,
    private _dialogRef:MatDialogRef<AddEditNowShowingComponent>,@Inject(MAT_DIALOG_DATA)public data : any,
    private _loginServices : LoginService){
    this.movieForm = this._builder.group({
      title : ['',Validators.required],
      poster : ['',Validators.required],
      theaterData : ['',Validators.required],
      duration : ['',Validators.required],
      plot: ['',Validators.required],
      type : ['',Validators.required],
      trailer : ['',Validators.required],
      selectedTimes: this._builder.array([]),
      bmId : [this._loginServices.getLoggedInUserId(),Validators.required]
    })
  }

  getAvailableTheater(id:number){
    this._services.getTheatersById(id).subscribe(data=>this.theaterData = data);
  }

  onChangeTheater() {
    const selectTheaterId = this.movieForm.value.theaterData;

    // const time = this.theaterData.filter((t:any) => t.id == selectTheaterId)
    //                 .map((t:any) => t.selectedTimes)
    // this.availableTimes = time

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
    // console.log(this.movieForm.value);

    }

  }

    // Time Operation Start

    get selectedTimes(): FormArray {
      return this.movieForm.get('selectedTimes') as FormArray;
    }

    addTime() {
      const timeGroup = this._builder.group({
        date: ['',Validators.required],
        starTime : ['',Validators.required],
        endTime: ['',Validators.required]
      });

      this.selectedTimes.push(timeGroup);
    }

    removeTime(index: number) {
      this.selectedTimes.removeAt(index);
    }

    // Time Operation End

}

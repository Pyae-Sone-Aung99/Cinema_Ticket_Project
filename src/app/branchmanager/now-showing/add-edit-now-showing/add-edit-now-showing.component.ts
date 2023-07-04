import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { LoginService } from 'src/app/services/login.service';
import { SchedulesService } from 'src/app/services/schedules.service';



@Component({
  selector: 'app-add-edit-now-showing',
  templateUrl: './add-edit-now-showing.component.html',
  styleUrls: ['./add-edit-now-showing.component.scss']
})
export class AddEditNowShowingComponent implements OnInit{
  movieForm:FormGroup
  theaterData:any
  bmManagerId ?: any = this._loginServices.getLoggedInUserId()
  ngOnInit(): void {
    this.getAvailableTheater(this.bmManagerId)

    if (this.data) {
      this._schedulesServices.getScheduleByNowShowingMovieId(this.data.id).subscribe( (data:[]) => {
        data.forEach((sched:any) => {
          const timeGroup = this._builder.group({
            date: sched.date,
            startTime : sched.startTime,
            endTime: sched.endTime
          });

          this.schedules.push(timeGroup);
        });
      })
      this.movieForm.patchValue({
        id : this.data.id,
        title : this.data.title,
        poster : this.data.poster,
        theaterId : '',
        plot : this.data.plot,
        type : this.data.type,
        trailer : this.data.trailer,
        cast : this.data.cast,
        cinemaId : this._loginServices.getLoggedInUserId(),
        schedules : this.schedules,
      })
    } else {
      this.addTime();
    }
  }

  constructor(private _services: BranchManagerServiceService,private _builder:FormBuilder,
    private _dialogRef:MatDialogRef<AddEditNowShowingComponent>,@Inject(MAT_DIALOG_DATA)public data : any,
    private _loginServices : LoginService,private _schedulesServices:SchedulesService){
    this.movieForm = this._builder.group({
      id : this.data.id,
      title : ['',Validators.required],
      poster : ['',Validators.required],
      theaterId : ['',Validators.required],
      plot: ['',Validators.required],
      type : ['',Validators.required],
      trailer : ['',Validators.required],
      schedules: this._builder.array([]),
      cinemaId : [this._loginServices.getLoggedInUserId(),Validators.required],
      cast : ['',Validators.required]
    })
  }

  getAvailableTheater(id:number){
    this._services.getTheatersById(id).subscribe(data=>{
      this.theaterData = data
    });
  }


  onSubmit(){
    if (this.movieForm.valid){
      if(this.data){
        console.log(this.movieForm.value);

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

    // Time Operation Start

    get schedules(): FormArray {
      return this.movieForm.get('schedules') as FormArray;
    }

    addTime() {
      const timeGroup = this._builder.group({
        date: ['',Validators.required],
        startTime : ['',Validators.required],
        endTime: ['',Validators.required]
      });

      this.schedules.push(timeGroup);
    }

    removeTime(index: number) {
      this.schedules.removeAt(index);
    }

    // Time Operation End

}

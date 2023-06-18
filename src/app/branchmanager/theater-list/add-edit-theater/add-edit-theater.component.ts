import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-edit-theater',
  templateUrl: './add-edit-theater.component.html',
  styleUrls: ['./add-edit-theater.component.scss']
})
export class AddEditTheaterComponent {

  theaterForm: FormGroup;


  ngOnInit() {
    if(this.data){
      for(const seat of this.data.seatLevels){
        this.addSeatLevel();
      }
    }else{
      this.addSeatLevel();
    }
    if(this.data){
      for(const time of this.data.selectedTimes){
        this.addTime();
      }
    }else{
      this.addTime();
    }
    this.theaterForm.patchValue(this.data)
  }

  constructor(private formBuilder: FormBuilder,private _services:BranchManagerServiceService,
    private _dialogRef:MatDialogRef<AddEditTheaterComponent>,@Inject(MAT_DIALOG_DATA)public data : any,
    private _loginServices : LoginService) {
    this.theaterForm = this.formBuilder.group({
      theaterName : ['',Validators.required],
      soundSystem : ['',Validators.required],
      theaterType : ['',Validators.required],
      seatLevels: this.formBuilder.array([]), // Initialize empty FormArray
      selectedTimes: this.formBuilder.array([]),
      bmId : [this._loginServices.getLoggedInUserId(),Validators.required]
    });
  }

// Seat Operation Start
  get seatLevels() {
    return this.theaterForm.get('seatLevels') as FormArray;
  }

  addSeatLevel() {
    const seatLevel = this.formBuilder.group({
      level: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.seatLevels.push(seatLevel);
  }

  removeSeatLevel(index: number) {
    this.seatLevels.removeAt(index);
  }
  // Seat Operation End

  // Time Operation Start

  get selectedTimes(): FormArray {
    return this.theaterForm.get('selectedTimes') as FormArray;
  }

  addTime() {
    const timeGroup = this.formBuilder.group({
      time: ['']
    });

    this.selectedTimes.push(timeGroup);
  }

  removeTime(index: number) {
    this.selectedTimes.removeAt(index);
  }

  // Time Operation End
  onSubmit() {
    if (this.theaterForm.valid) {
      if(this.data){
        this._services.updateTheater(this.data.id,this.theaterForm.value).subscribe({
          next : (val:any)=>{
            this._dialogRef.close(true)
          }
        })
      }else{
        this._services.addTheater(this.theaterForm.value).subscribe({
          next : (resp)=>{
            this._dialogRef.close(true)
          }
        })

      }
    }

  }



}

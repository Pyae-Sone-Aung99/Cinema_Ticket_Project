import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-now-showing-staff',
  templateUrl: './now-showing-staff.component.html',
  styleUrls: ['./now-showing-staff.component.scss']
})
export class NowShowingStaffComponent  implements OnInit{

  NowShowingData:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this.getNowShowingData();


  }


  constructor(private _service:BranchManagerServiceService,private _router:Router) {

  }

  getNowShowingData(){
    this._service.getNowShowing().subscribe({
      next : (resp)=>{
        this.NowShowingData = resp
      }
    })
  }

  seatbook(id:any){
    console.log(id);

    this._router.navigate(['/branchstaff/bookingseat/'],{ queryParams: { id } });
  }
}

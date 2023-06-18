import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';

@Component({
  selector: 'app-now-showing-staff',
  templateUrl: './now-showing-staff.component.html',
  styleUrls: ['./now-showing-staff.component.scss']
})
export class NowShowingStaffComponent  implements OnInit{

  NowShowingData:any
  enterSearchValue : string = ''
  theatersData : {theaterName:string,id:number}[] = []

  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getNowShowinggBybmIdData(id)

      }
    })

  }


  constructor(private _service:BranchManagerServiceService,private _router:Router,
    private _route:ActivatedRoute) {

  }

  getTheaterDataById(id:number){
    this._service.getTheatersById(id).subscribe((data:any)=> {
      this.theatersData = data
    }
    )
  }

  getNowShowinggBybmIdData(id:number){
    this._service.getNowShowingByBranchManagerId(id).subscribe(data => {
      this.NowShowingData = data;
      this.NowShowingData.forEach((element:any) => {
        this.getTheaterDataById(element.theaterData)
      })
    })
  }

  seatbook(id:any){
    this._router.navigate(['/branchstaff/bookingseat/'],{ queryParams: { id : id } });
  }

  getTheaterName(nowShowingTheaterId:number){
    let gg = this.theatersData.find((ele)=> ele.id == nowShowingTheaterId )
    return gg ? gg.theaterName : ''
  }
}

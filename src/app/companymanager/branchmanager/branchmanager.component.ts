import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-branchmanager',
  templateUrl: './branchmanager.component.html',
  styleUrls: ['./branchmanager.component.scss']
})
export class BranchmanagerComponent implements OnInit{
  cinemaList:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    // this.getBranchManager();
    this._route.queryParams.subscribe(params =>{
      if(params['cmId']){
        const id = Number(params['cmId'])
        this.getBranchManager(id)
      }
    })
  }
  constructor(private _service: CompanymanagerServicesService,private _router:Router,
    private _route : ActivatedRoute){}

  getBranchManager(id:number){
    this._service.getCinemalistById(id).subscribe(data => this.cinemaList = data)
  }

  // branchManager(){
  //   this._router.navigateByUrl("branchmanager/staff")
  // }
}

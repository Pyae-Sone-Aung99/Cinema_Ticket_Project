import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CompanymanagerServicesService } from 'src/app/services/companymanager-services.service';

@Component({
  selector: 'app-branchmanager',
  templateUrl: './branchmanager.component.html',
  styleUrls: ['./branchmanager.component.scss']
})
export class BranchmanagerComponent implements OnInit{
  cinemaList:any
  enterSearchValue : string = ''

  ngOnInit(): void {
    this.getBranchManager();
  }
  constructor(private _service: CompanymanagerServicesService,private _router:Router){}

  getBranchManager(){
    this._service.getCinemalist().subscribe({
      next : (resp)=>{
        this.cinemaList = resp
      }
    })
  }

  branchManager(){
    this._router.navigateByUrl("branchmanager/staff")
  }
}

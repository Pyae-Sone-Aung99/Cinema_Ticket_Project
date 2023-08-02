import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BranchManagerServiceService } from 'src/app/services/branch-manager-service.service';
import { AddEditNowShowingComponent } from './add-edit-now-showing/add-edit-now-showing.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/services/schedules.service';
import { WorkBook, write, utils } from 'xlsx';
import * as FileSaver from 'file-saver';

// interface Noidata{
//         id : number
//         title : string
//         poster : string
//         plot : string
//         trailer : string
//         cast : string
//         type : string
//         cinema : {
//           cinemaName : string
//         }
//         theater : string
// }

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent implements OnInit{
  NowShowingData:any
  enterSearchValue : string = ''
  theatersData : {theaterName:string,id:number}[] = []
  schedules:any
  finalData:{date:string,startTime:string,endTime:string,nowShowingMovies:{id:number}} [] =[]
  currentPage : number = 1;
  itemsPerPage : number = 5;


  ngOnInit(): void {
    this._route.queryParams.subscribe(params =>{
      if(params['bmId']){
        const id = Number(params['bmId'])
        this.getNowShowinggBybmIdData(id)
      }
    })
    this._schedule.getAllSchedule().subscribe(ele =>{
      this.schedules = ele
    })
  }

  constructor(private _service:BranchManagerServiceService,private _dialog:MatDialog,private _router:Router,
    private _route:ActivatedRoute,private _schedule:SchedulesService) {

  }

  getSchedule(id:number){
    this._schedule.getScheduleByNowShowingMovieId(id).subscribe( ele => console.log(ele));

  }

  getNowShowinggBybmIdData(id:number){
    this._service.getNowShowingByBranchManagerId(id).subscribe(data => {
      this.NowShowingData = data;
    })

  }

  openAddNowShowing(){
    const dialogRef = this._dialog.open(AddEditNowShowingComponent,{
      disableClose:true
    })
    dialogRef.afterClosed().subscribe({
      next : (val)=>{
        if(val){
            this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
          }
    })
        }
      }
    })
  }

  openUpdateNowShowing(data:any){
    const dialogRef = this._dialog.open(AddEditNowShowingComponent,{
      data,disableClose:true
    })
    dialogRef.afterClosed().subscribe({
      next : ()=>{
          this._route.queryParams.subscribe(params =>{
            if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
           }
    })
      }
    })
  }


  deleteCinema(id:number){
    this._service.deleteNowShowing(id).subscribe({
      next : ()=>{
          this._route.queryParams.subscribe(params =>{
          if(params['bmId']){
            const id = Number(params['bmId'])
            this.getNowShowinggBybmIdData(id)
          }
    })
      }
    })
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;

  }

  get endIndex(): number {
    return this.startIndex + this.itemsPerPage - 1;
  }

  get currentData(): any[] {
    return this.NowShowingData.slice(this.startIndex, this.endIndex + 1);
  }

  totalPages(): number {
    return Math.ceil(this.NowShowingData.length / this.itemsPerPage);
    //1.95 to 2 ( math.celi)
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }


  totalPagesArray(): number[] {
    // console.log(Array.from({ length: 3 }, (v,i) => i + 1));
    // Array [1, 2, 3]
    return Array.from({ length: this.totalPages() }, (v, i) => i + 1);
  }

  exportToExcel(): void {
    const data:[] = this.NowShowingData.map((item:any) => {
      return{
        id : item.id,
        title : item.title,
        poster : item.poster,
        plot : item.plot,
        trailer : item.trailer,
        cast : item.cast,
        type : item.type,
        cinema : item.cinema?.cinemaName,
        theater : item.theater
          }
    } )
    // const data:Noidata[] = this.NowShowingData
    // console.log(this.NowShowingData);


    const worksheet = utils.json_to_sheet(data);
    const workbook: WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer]);

    FileSaver.saveAs(excelBlob, 'data.xlsx');
  }
}


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AdvertisementService, AdvertisementUpdateService } from 'src/app/api/services';
import { AddEditAdvertisementComponent } from './AddEditAdvertisement/AddEditAdvertisement.component';
import { AdvertisementVM } from 'src/app/api/models';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-Advertisement',
  templateUrl: './Advertisement.component.html',
  styleUrls: ['./Advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  public data: AdvertisementVM;

  List 		      : AdvertisementVM[];
  dataSource = new MatTableDataSource();
	popUpDeleteUserResponse : any;//'CategoryName',
	displayedColumns : string [] = ['AdsId','AdsType','MarketName','AdsText','StartDate','EndDate','AdvertismenOpen','CustomerOpen','AdvertismenView','CustomerView','action' ];
	//@ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  @ViewChild(MatSort,{static: false}) sort           : MatSort;
  @ViewChild('videoPlayer',{static: false}) videoplayer: ElementRef;
  close: any;
	showType	    				: string = 'grid';
  ListDB: any;
  MyUpdateModel: any;
  paginator: MatPaginator;
  @ViewChild(MatPaginator,{static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
    }
    
// dataSource = new MatTableDataSource(); 
	constructor(public translate : TranslateService,
					private router : Router,	private ServiceUpdate : AdvertisementUpdateService,  
					private Service : AdvertisementService, private dialog: MatDialog,private _snackBar: MatSnackBar) { 
           
           
          }
          setDataSourceAttributes() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
  ngOnInit() {
    this.GetAll();
    this.dataSource.paginator = this.paginator;
  
  }
  GetAll(){
   
    this.Service.ApiAdvertisementGetAllAdvertisementSTPGet().subscribe((data: any) => {
      debugger;
        this.List=data.Data;
        this.dataSource = new MatTableDataSource(data.Data);
     // this.dataSource =  new MatTableDataSource<AdvertisementVM>(this.List);
     // this.dataSource.paginator = this.paginator;
    //  this.List= new MatTableDataSource(this.List);
    })
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
openNewTab(src) {
  window.open(src);
}
GetUpdateAdvertsment(obj)
{
  debugger
  this.ServiceUpdate.ApiAdvertisementUpdateGetAdvertisementWaitingUpdatedGet(obj.AdsId).subscribe((data: any) => {
      debugger;
      if(data.Data!=null){
        this.MyUpdateModel=data.Data;
        this.MyUpdateModel.flag=0;
       this.MyUpdateModel.MarketId=obj.MarketId;
       this.MyUpdateModel.CategoryId=obj.CategoryId;
       // this.MyUpdateModel.MarketId='0';
        const dialogRef = this.dialog.open(AddEditAdvertisementComponent, {
         width: 'rem',
         data:this.MyUpdateModel,
         disableClose:true
         
       }).afterClosed().subscribe(result => {
         this.GetAll();
       });
       //  
      }
      else{
        this.GetAll();
      }
  this.dataSource= new MatTableDataSource(this.List);
  })
}
  onEdit(obj){
   
    this.GetUpdateAdvertsment(obj);
  
   
   // this.dialog.open(AddAdvertisementComponent,dialogConfig);
  }
  onUpdate(obj){
  
    obj.flag='1';
    const dialogRef = this.dialog.open(AddEditAdvertisementComponent, {
      width: 'rem',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      debugger;
      this.GetAll();
    });
   // this.dialog.open(AddAdvertisementComponent,dialogConfig);
  }
  onavaliable(obj){
    debugger;
    if(obj.Available==false)
    {
      obj.Available=true;
    }
   else if(obj.Available==true)
    {
      obj.Available=false;
    }
    this.Service.ApiAdvertisementUpdateAdvertisementPut(obj).subscribe( res=>{
    
      if(res.IsPassed==true)
      {
        this._snackBar.open("تم التعديل بنجاح","تعديل" ,{
          duration: 2220,
          
        });
        this.GetAll();
      }
      else
      {
        this._snackBar.open("حدث خطأ عند التعديل","تعديل" ,{
          duration: 2220,
          
        });
      }
    })
   // this.dialog.open(AddAdvertisementComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
   obj.flag='1';
    const dialogRef = this.dialog.open(AddEditAdvertisementComponent, {
      width: 'rem',
      data:obj
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  
  delete(obj): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe( dialogResult => {
      this.close = dialogResult;
      //this.result = dialogResult;
      debugger;
      if(dialogResult==false){
        this.Service.ApiAdvertisementRemoveAdvertisementDelete(obj).subscribe( res=>{
    
          if(res.IsPassed==true)
          {
            this._snackBar.open("تم الحذف بنجاح","حذف" ,{
              duration: 2220,
              
            });
            this.GetAll();
          }
          else
          {
            this._snackBar.open(" الحذف لم يتم","حذف" ,{
              duration: 2220,
              
            });
          }
  
        })
       
      }
      else{

      }
     
    });
  }
  btnClick(id){
   
    this.router.navigateByUrl('/admin-panel/Advertisementdetail?advertisementid='+id);
 
  }
}



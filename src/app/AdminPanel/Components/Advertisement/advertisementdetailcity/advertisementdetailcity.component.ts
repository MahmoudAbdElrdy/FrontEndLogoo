import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService, CityService } from 'src/app/api/services';
import { CityVM } from 'src/app/api/models';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AdvertisementAddEditCityComponent } from './advertisement-add-edit-city/advertisement-add-edit-city.component';
import { AdvertisementCityVM } from 'src/app/api/models/advertisement-city-vm';
import { detailsService } from 'src/app/Services/details.service';
@Component({
  selector: 'app-advertisementdetailcity',
  templateUrl: './advertisementdetailcity.component.html',
  styleUrls: ['./advertisementdetailcity.component.css'],
  providers:[detailsService]
})
export class AdvertisementdetailcityComponent {
  public data: CityVM;
  public dataModel: AdvertisementCityVM
  List 		      : any;
  id:any;
  @Input()advertisementid:any;
	popUpDeleteUserResponse : any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
	displayedColumns : string [] = ['CityId','CityName','action' ];
  @ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;
  dataSource = new MatTableDataSource<CityVM>();
  ListCity: any;
	constructor(public translate : TranslateService,
					private router : Router, private AdvertisementService:AdvertisementService,private activatedRoute:ActivatedRoute,
					private Service : CityService, private dialog: MatDialog,private _snackBar: MatSnackBar,private _dataShared:detailsService) { }

  
  ngOnInit() {
    this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
  this.GetAllCity();
//  this.GetAllAdvertisementService();
}

GetAllCity(){
    
  this.Service.ApiCityGetAllCityGet().subscribe((data: any) => {
   
    this.ListCity=data.Data;
  })
}
 
  GetAllAdvertisementService(){
    
    this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
    this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
      debugger
      this.List=data.body.Data.AdvertisementCity;
      console.log(this.List)
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AdvertisementAddEditCityComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
     
      this.GetAllAdvertisementService();
    });
   // this.dialog.open(AddCityComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
   
    const dialogRef = this.dialog.open(AdvertisementAddEditCityComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
     
      this. ngOnInit();
    });
  }
  
  delete(obj): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose:true
    });

    dialogRef.afterClosed().subscribe( dialogResult => {
      this.close = dialogResult;
      //this.result = dialogResult;
      debugger;
      if(dialogResult==false){
        this.AdvertisementService.ApiAdvertisementRemoveAdvertisementCityDeleteResponse(obj).subscribe( res=>{
    
          if(res.body.IsPassed==true)
          {
            this._snackBar.open("تم الحذف بنجاح","حذف" ,{
              duration: 2220,
              
            });
            this.GetAllAdvertisementService();
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
 
}


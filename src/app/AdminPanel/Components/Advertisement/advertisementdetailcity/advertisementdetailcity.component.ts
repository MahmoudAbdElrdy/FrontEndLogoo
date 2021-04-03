import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { AdvertisementService, CityService } from 'src/app/api/services';
import { AdvertisementAddEditCityComponent } from './advertisement-add-edit-city/advertisement-add-edit-city.component';
import { CityVM } from 'src/app/api/models';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-advertisementdetailcity',
  templateUrl: './advertisementdetailcity.component.html',
  styleUrls: ['./advertisementdetailcity.component.css']
})
export class AdvertisementdetailcityComponent {
  public data: CityVM;
  List 		      : any;
	popUpDeleteUserResponse : any;
	displayedColumns : string [] = ['CityId','CityName','CountryName','action' ];
  @ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;
  dataSource = new MatTableDataSource<CityVM>();
	constructor(public translate : TranslateService,
					private router : Router, private AdvertisementService:AdvertisementService,
					private Service : CityService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  
  ngOnInit() {
   
   this.GetAll();
   
}
  GetAll(){
    
    this.Service.ApiCityGetAllCitySTPGet().subscribe((data: any) => {
      
      this.List=data.Data;
    })
  }
  GetAllAdvertisementService(){
    
    this.Service.ApiCityGetAllCitySTPGet().subscribe((data: any) => {
      
      this.List=data.Data;
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AdvertisementAddEditCityComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
     
      this.GetAll();
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
        this.Service.ApiCityRemoveCityDelete(obj).subscribe( res=>{
    
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}


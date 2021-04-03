import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { AdvertisementService, CategoryService } from 'src/app/api/services';
import { CategoryVM } from 'src/app/api/models';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AdvertisementAddEditcategoryComponent } from './advertisement-add-editcategory/advertisement-add-editcategory.component';
import { AdvertisementCategoryVM } from 'src/app/api/models/advertisement-category-vm';

@Component({
  selector: 'app-advertisementdetailcategory',
  templateUrl: './advertisementdetailcategory.component.html',
  styleUrls: ['./advertisementdetailcategory.component.css']
})
export class AdvertisementdetailcategoryComponent implements OnInit { public data: CategoryVM;
  public dataModel: AdvertisementCategoryVM
  List 		      : any;
  id:any;
  
  @Input()advertisementid:any;
	popUpDeleteUserResponse : any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
	displayedColumns : string [] = ['CategoryId','CategoryName','action' ];
  @ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;
  dataSource = new MatTableDataSource<CategoryVM>();
  ListCategory: any;
	constructor(public translate : TranslateService,
					private router : Router, private AdvertisementService:AdvertisementService,
					private Service : CategoryService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  
  ngOnInit() {
   
  this.GetAllCategory();
   this.GetAllAdvertisementService();
}
GetAllCategory(){
    
  this.Service.ApiCategoryGetAllCategoryGetResponse().subscribe((data: any) => {
   
    this.ListCategory=data.Data;
  })
}
 
  GetAllAdvertisementService(){
    
    this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
    this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
      debugger
      this.List=data.body.Data.AdvertisementCategory;
      console.log(this.List)
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AdvertisementAddEditcategoryComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
     
      this.GetAllAdvertisementService();
    });
   // this.dialog.open(AddCategoryComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
   
    const dialogRef = this.dialog.open(AdvertisementAddEditcategoryComponent, {
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
        this.AdvertisementService.ApiAdvertisementRemoveAdvertisementCategoryDeleteResponse(obj).subscribe( res=>{
    
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


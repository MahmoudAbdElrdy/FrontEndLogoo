
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/api/services';
import { AddEditCategoryComponent } from './AddEditCategory/AddEditCategory.component';
import { CategoryVM } from 'src/app/api/models';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css']
})
export class CategoryComponent implements OnInit {
  public data: CategoryVM;
  List 		      : any;
	popUpDeleteUserResponse : any;
	displayedColumns : string [] = ['CategoryId','CategoryName','action' ];
	@ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;
	showType	    				: string = 'grid';
	constructor(public translate : TranslateService,
					private router : Router, 
					private Service : CategoryService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  this.GetAll();

  }
  GetAll(){
   
    this.Service.ApiCategoryGetAllCategoryGet().subscribe((data: any) => {
      debugger;
      this.List=data.Data;
    //  this.List= new MatTableDataSource(this.List);
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      width: 'rem',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.GetAll();
    });
   // this.dialog.open(AddCategoryComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
   
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      width: 'rem',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
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
        this.Service.ApiCategoryRemoveCategoryDelete(obj).subscribe( res=>{
    
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
}



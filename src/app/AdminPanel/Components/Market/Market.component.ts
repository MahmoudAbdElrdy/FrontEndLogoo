
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { MarketService } from 'src/app/api/services';
import { AddEditMarketComponent } from './AddEditMarket/AddEditMarket.component';
import { MarketVM } from 'src/app/api/models';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-Market',
  templateUrl: './Market.component.html',
  styleUrls: ['./Market.component.css']
})
export class MarketComponent  {
  public data: MarketVM;
  List 		      : any;
	popUpDeleteUserResponse : any;
	displayedColumns : string [] = ['MarketId','MarketName','City','MarketLogo','MarketAddress','MarketEmail','MarketInfo','action' ];
 // @ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  paginator: MatPaginator;
  @ViewChild(MatPaginator,{static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
    }
    setDataSourceAttributes() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  close: any;
  dataSource = new MatTableDataSource<MarketVM>();
	constructor(public translate : TranslateService,
					private router : Router, 
					private Service : MarketService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  this.GetAll();
  debugger;
  this.dataSource = new MatTableDataSource(this.List);
  
 // setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  GetAll(){
    
    this.Service.ApiMarketGetAllMarketContorlPanelGet().subscribe((data: any) => {
      
      this.List=data.Data;
      this.dataSource = new MatTableDataSource(data.Data);
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AddEditMarketComponent, {
      width: '400px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
     
      this.GetAll();
    });
   // this.dialog.open(AddMarketComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
   
    const dialogRef = this.dialog.open(AddEditMarketComponent, {
      width: '400px',
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
        this.Service.ApiMarketRemoveMarketDelete(obj).subscribe( res=>{
    
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


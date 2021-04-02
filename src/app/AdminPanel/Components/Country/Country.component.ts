import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/api/services';
import { AddCountryComponent } from './AddCountry/AddCountry.component';
import { CountryVM } from 'src/app/api/models';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-Country',
  templateUrl: './Country.component.html',
  styleUrls: ['./Country.component.css']
})
export class CountryComponent implements OnInit {
  public data: CountryVM;
  List 		      : any;
	popUpDeleteUserResponse : any;
	displayedColumns : string [] = ['CountryId','CountryName','action' ];
	@ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;

	constructor(public translate : TranslateService,
					private router : Router, 
					private Service : CountryService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  this.GetAll();

  }
  GetAll(){
    
    this.Service.ApiCountryGetAllCountryGet().subscribe((data: any) => {
      debugger;
      this.List=data.Data;
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AddCountryComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.GetAll();
    });
   // this.dialog.open(AddCountryComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
    const dialogRef = this.dialog.open(AddCountryComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
    // dialogRef.afterClosed().subscribe(res => {
    //   this.color = res;
    // });
  //   delete(obj){
  //     debugger;
      
  //     const dialogRef = this.dialog.open(AddCountryComponent, {
  //       width: '250px',
  //       data:obj
  //     }).afterClosed().subscribe(result => {
  //       this.GetAll();
  //     });
    
  // }
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
        this.Service.ApiCountryRemoveCountryDelete(obj).subscribe( res=>{
    
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

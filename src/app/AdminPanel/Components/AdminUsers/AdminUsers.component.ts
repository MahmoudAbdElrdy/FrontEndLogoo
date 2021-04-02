import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AdminUsersService } from 'src/app/api/services';
import { AddAdminUsersComponent } from './AdminUsers/AddAdminUsers.component';
import { AdminUsersVM } from 'src/app/api/models';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-AdminUsers',
  templateUrl: './AdminUsers.component.html',
  styleUrls: ['./AdminUsers.component.css']
})
export class AdminUsersComponent implements OnInit {
  public data: AdminUsersVM;
  List 		      : any;
	popUpDeleteUserResponse : any;
	displayedColumns : string [] = ['UserId','UserName','Password','action' ];
	@ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;

	constructor(public translate : TranslateService,
					private router : Router, 
					private Service : AdminUsersService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  this.GetAll();

  }
  GetAll(){
    
    this.Service.ApiAdminUsersGetAllAdminUsersGet().subscribe((data: any) => {
      debugger;
      this.List=data.Data;
    })
  }
  onEdit(obj){
    debugger;
    const dialogRef = this.dialog.open(AddAdminUsersComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.GetAll();
    });
   // this.dialog.open(AddAdminUsersComponent,dialogConfig);
  }
  openDialog(obj) {
   // obj.action = action;
    const dialogRef = this.dialog.open(AddAdminUsersComponent, {
      width: '250px',
      data:obj,
      disableClose:true
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
   // this.GetAll();
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
    this.Service.ApiAdminUsersUpdateAdminUsersPut(obj).subscribe( res=>{
    
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
        this.Service.ApiAdminUsersRemoveAdminUsersDelete(obj).subscribe( res=>{
    
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

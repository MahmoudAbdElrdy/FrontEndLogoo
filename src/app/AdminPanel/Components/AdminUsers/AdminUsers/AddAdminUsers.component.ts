import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { AdminUsersService } from 'src/app/api/services';
import {AdminUsersVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddAdminUsers',
  templateUrl: './AddAdminUsers.component.html',
  styleUrls: ['./AddAdminUsers.component.css']
})
export class AddAdminUsersComponent implements OnInit {
  public dataModel: AdminUsersVM;
  List: any;
  hide = true;
 
  constructor(public dialogRef: MatDialogRef<AddAdminUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminUsersVM,private _snackBar: MatSnackBar,	private Service : AdminUsersService) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.UserId!=null ||this.dataModel.UserId!=undefined)
    {
this.Update();
    }
    else{
      this.ADD();
    }
   
    this.dialogRef.close();
  }
  ADD(){
    
    this.Service.ApiAdminUsersSaveAdminUsersPost(this.dataModel).subscribe( res=>{
      if(res.IsPassed==true)
      {
        this._snackBar.open("تم الاضافة بنجاح","اضافة" ,{
          duration: 2220,
          
        });
      //  this.GetAll();
      }
      else
      {
        this._snackBar.open("حدث خطأ عند الاضافة","اضافة" ,{
          duration: 2220,
          
        });
      }
    })
  }
  Update(){
    debugger;
    this.Service.ApiAdminUsersUpdateAdminUsersPut(this.dataModel).subscribe( res=>{
      if(res.IsPassed==true)
      {
        this._snackBar.open("تم التعديل بنجاح","تعديل" ,{
          duration: 2220,
          
        });
      }
      else
      {
        this._snackBar.open("حدث خطأ عند التعديل","تعديل" ,{
          duration: 2220,
          
        });
      }
    })
  }
  GetAll(){
    
    this.Service.ApiAdminUsersGetAllAdminUsersGet().subscribe((data: any) => {
      debugger;
      this.List=data.Data;
    })
  }
  ngOnInit() {
  }

}

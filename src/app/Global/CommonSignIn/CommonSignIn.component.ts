import { Component, OnInit } from '@angular/core';
import { AdminUsersVM } from 'src/app/api/models';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AdminUsersService } from 'src/app/api/services';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {
  //public data: AdminUsersVM;
  public dataModel:  any = {};

	UserName:any;
Password:any;
  close: any;

	constructor(public translate : TranslateService,
					private router : Router, 
					private Service : AdminUsersService, private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  
// [routerLink]="['/admin-panel/Country']"
  }

  Login(){
    
    this.Service.ApiAdminUsersAdminUsersLoginPost(this.dataModel).subscribe( res=>{
    debugger;
      if(res.IsPassed==true)
      { 
        this.router.navigate(['/admin-panel/Category'])
        this._snackBar.open("تم الدخول بنجاح","تسجيل صحيح" ,{
          duration: 220,
          
        });
    
      }
      else
      {
        this._snackBar.open("حدث خطأ عند الدخول","خطا" ,{
          duration: 2220,
          
        });
      }
    })
   // this.dialog.open(AddAdvertisementComponent,dialogConfig);
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { AdvertisementService, CategoryService, CountryService } from 'src/app/api/services';
import {CategoryVM} from 'src/app/api/models'
import { AdvertisementCategoryVM } from 'src/app/api/models/advertisement-Category-vm';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-advertisement-add-editcategory',
  templateUrl: './advertisement-add-editcategory.component.html',
  styleUrls: ['./advertisement-add-editcategory.component.css']
})
export class AdvertisementAddEditcategoryComponent implements OnInit {
  selected = 'option2';
  ListCategory: any;
  public dataModel: AdvertisementCategoryVM=new AdvertisementCategoryVM();
  constructor( private activatedRoute: ActivatedRoute,public dialogRef: MatDialogRef<AdvertisementAddEditcategoryComponent>,private Service : AdvertisementService,private _snackBar: MatSnackBar,
    private ServiceCategory : CategoryService,) { }

  ngOnInit() {
    this.GetAllCategory();
  }
  GetAllCategory(){
    
    this.ServiceCategory.ApiCategoryGetAllCategoryGet().subscribe((data: any) => {
      debugger;
      this.ListCategory=data.Data;
    })
  }
  Close(): void {
    this.dialogRef.close();
  }
Save(){
  debugger;
 
    this.ADD();
  
 
  this.dialogRef.close();
}
ADD(){
  debugger;
 
  this.dataModel.AdsId= this.activatedRoute.snapshot.queryParams['advertisementid'];
  this.Service.ApiAdvertisementSaveAdvertisementCategoryPost(this.dataModel).subscribe( res=>{
  
    if(res.IsPassed==true)
    {
      this._snackBar.open("تم الاضافة بنجاح","اضافة" ,{
        duration: 2220,
        
      });
    }
    else
    {
      this._snackBar.open("حدث خطأ عند الاضافة","اضافة" ,{
        duration: 2220,
        
      });
    }
  })
}

}


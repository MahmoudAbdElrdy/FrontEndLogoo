
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { CategoryService, CountryService } from 'src/app/api/services';
import {CategoryVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddEditCategory',
  templateUrl: './AddEditCategory.component.html',
  styleUrls: ['./AddEditCategory.component.css']
}) 
export class AddEditCategoryComponent implements OnInit {
  public dataModel: CategoryVM
  selected = 'option2';
  ListCountry: any;
  constructor(public dialogRef: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryVM,	private Service : CategoryService,	private ServiceCountry : CountryService,private _snackBar: MatSnackBar) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.CategoryId!=null ||this.dataModel.CategoryId!=undefined)
    {
this.Update();
    }
    else{
      this.ADD();
    }
   
    this.dialogRef.close();
  }
  ADD(){
    debugger;
    this.Service.ApiCategorySaveCategoryPost(this.dataModel).subscribe( res=>{
    
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
  Update(){
    debugger;
    
    this.Service.ApiCategoryUpdateCategoryPut(this.dataModel).subscribe( res=>{
    
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
  GetAllCountry(){
    
    this.ServiceCountry.ApiCountryGetAllCountryGet().subscribe((data: any) => {
      debugger;
      this.ListCountry=data.Data;
    })
  } 
 
  ngOnInit() {
    this.GetAllCountry();
  }
  uploadImage(event) {
    debugger;
    let files = event.target.files;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.Service.UploadImage(formData).subscribe(event => {
    debugger;
       const result= event as any;
     // this.files=result.dbPath;
    this.dataModel.CategoryImage=result.Data;
    // this.Employee.ImagePath=result.dbPath;
  //  this.ImagPath();
  //  //this.createImgPath( this.Employee.ImagePath) ;
  //     console.log('uploaded images : ',this.files);
    });

  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { CountryService } from 'src/app/api/services';
import {CountryVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddCountry',
  templateUrl: './AddCountry.component.html',
  styleUrls: ['./AddCountry.component.css']
})
export class AddCountryComponent implements OnInit {
  public dataModel: CountryVM
  List: any;
 
  constructor(public dialogRef: MatDialogRef<AddCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CountryVM,private _snackBar: MatSnackBar,	private Service : CountryService) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.CountryId!=null ||this.dataModel.CountryId!=undefined)
    {
this.Update();
    }
    else{
      this.ADD();
    }
   
    this.dialogRef.close();
  }
  ADD(){
    
    this.Service.ApiCountrySaveCountryPost(this.dataModel).subscribe( res=>{
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
    this.Service.ApiCountryUpdateCountryPut(this.dataModel).subscribe( res=>{
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
    
    this.Service.ApiCountryGetAllCountryGet().subscribe((data: any) => {
      debugger;
      this.List=data.Data;
    })
  }
  ngOnInit() {
  }

}

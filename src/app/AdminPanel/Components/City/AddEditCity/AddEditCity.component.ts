import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { CityService, CountryService } from 'src/app/api/services';
import {CityVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddEditCity',
  templateUrl: './AddEditCity.component.html',
  styleUrls: ['./AddEditCity.component.css']
}) 
export class AddEditCityComponent implements OnInit {
  public dataModel: CityVM
  selected = 'option2';
  ListCountry: any;
  constructor(public dialogRef: MatDialogRef<AddEditCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CityVM,	private Service : CityService,private _snackBar: MatSnackBar,	private ServiceCountry : CountryService) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.CityId!=null ||this.dataModel.CityId!=undefined)
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
    this.Service.ApiCitySaveCityPost(this.dataModel).subscribe( res=>{
    
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
    
    this.Service.ApiCityUpdateCityPut(this.dataModel).subscribe( res=>{
    
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
  onSelectCountry(event) {

    this.dataModel.CountryId=event;
    }
  ngOnInit() {
    this.GetAllCountry();
  }

}

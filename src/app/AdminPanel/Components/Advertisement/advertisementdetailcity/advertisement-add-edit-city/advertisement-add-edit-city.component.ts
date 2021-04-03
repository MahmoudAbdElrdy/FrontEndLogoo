import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { AdvertisementService, CityService, CountryService } from 'src/app/api/services';
import {CityVM} from 'src/app/api/models'
import { AdvertisementCityVM } from 'src/app/api/models/advertisement-city-vm';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-advertisement-add-edit-city',
  templateUrl: './advertisement-add-edit-city.component.html',
  styleUrls: ['./advertisement-add-edit-city.component.css']
})
export class AdvertisementAddEditCityComponent implements OnInit {
  selected = 'option2';
  ListCity: any;
  public dataModel: AdvertisementCityVM=new AdvertisementCityVM();
  constructor( private activatedRoute: ActivatedRoute,public dialogRef: MatDialogRef<AdvertisementAddEditCityComponent>,private Service : AdvertisementService,private _snackBar: MatSnackBar,
    private ServiceCity : CityService,) { }

  ngOnInit() {
    this.GetAllCity();
  }
  GetAllCity(){
    
    this.ServiceCity.ApiCityGetAllCityGet().subscribe((data: any) => {
      debugger;
      this.ListCity=data.Data;
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
  this.Service.ApiAdvertisementSaveAdvertisementCityPost(this.dataModel).subscribe( res=>{
  
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

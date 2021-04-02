import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { MarketService, CityService, CategoryService } from 'src/app/api/services';
import {MarketVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddEditMarket',
  templateUrl: './AddEditMarket.component.html',
  styleUrls: ['./AddEditMarket.component.css']
}) 
export class AddEditMarketComponent implements OnInit {
  public dataModel: MarketVM
  selected = 'option2';
  ListCity: any;
  constructor(public dialogRef: MatDialogRef<AddEditMarketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarketVM,	private ServiceImage : CategoryService,
    	private Service : MarketService,private _snackBar: MatSnackBar,	private ServiceCity : CityService) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.MarketId!=null ||this.dataModel.MarketId!=undefined)
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
    this.Service.ApiMarketSaveMarketPost(this.dataModel).subscribe( res=>{
    
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
    
    this.Service.ApiMarketUpdateMarketPut(this.dataModel).subscribe( res=>{
    
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
  GetAllCity(){
    
    this.ServiceCity.ApiCityGetAllCityGet().subscribe((data: any) => {
      debugger;
      this.ListCity=data.Data;
    })
  } 
  onSelectCity(event) {

    this.dataModel.CityId=event;
    }
  ngOnInit() {
    this.GetAllCity();
  }
  uploadImage(event) {
    debugger;
    let files = event.target.files;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.ServiceImage.UploadImage(formData).subscribe(event => {
    debugger;
       const result= event as any;
     // this.files=result.dbPath;
    this.dataModel.MarketLogo=result.Data;
    // this.Employee.ImagePath=result.dbPath;
  //  this.ImagPath();
  //  //this.createImgPath( this.Employee.ImagePath) ;
  //     console.log('uploaded images : ',this.files);
    });

  }
}


import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { AdvertisementService, CityService, CategoryService, MarketService, AdvertisementUpdateService } from 'src/app/api/services';
import {AdvertisementVM} from 'src/app/api/models'
@Component({
  selector: 'app-AddEditAdvertisement',
  templateUrl: './AddEditAdvertisement.component.html',
  styleUrls: ['./AddEditAdvertisement.component.css']
}) 
export class AddEditAdvertisementComponent implements OnInit {
  @ViewChild('videoPlayer',{static: false}) videoplayer: ElementRef;
  public dataModel: AdvertisementVM
  selected = 'option2';
  ListCity: any;
   
show:any
   ListType:any = [
      {id: 1, text: 'نص'},
      {id: 2, text: 'صورة'},
      {id: 3, text: 'فيديو'},
      {id: 4, text: 'الكل '},
  ];
  ListCategroy: any;
  ListMarket: any;
  constructor(public dialogRef: MatDialogRef<AddEditAdvertisementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdvertisementVM,	private categroy:CategoryService,private market:MarketService,
    private Service : AdvertisementService,private _snackBar: MatSnackBar,
    	private ServiceCity : CityService, private ServiceUpdate : AdvertisementUpdateService) {
      this.dataModel =data;
   // this.action = this.dataModel.action;
     }
     ngOnInit() {
    
      this.GetAllMarket();
    }
    DeleteUpdate(){
      this.ServiceUpdate.ApiAdvertisementRemoveAdvertisementUpdateDelete(this.dataModel).subscribe( res=>{
    
        if(res.IsPassed==true)
        {
          // this._snackBar.open("تم الرفض بنجاح","الرفض" ,{
          //   duration: 2220,
            
          // });
          this.dialogRef.close();
      
        }
        else
        {
          // this._snackBar.open(" الرفض لم يتم","الرفض" ,{
          //   duration: 2220,
            
          // });
          this.dialogRef.close();
        }
      
      })
      
    }
    CloseUpdate(){
      this.dataModel.WaitingUpdate=false;
      this.Update();
      this.DeleteUpdate();
    }
    SaveUpdate(){
this.dataModel.WaitingUpdate=true;
this.Update();
this.DeleteUpdate();

    }
    Close(): void {
      this.dialogRef.close();
    }
  Save(){
    debugger;
    if(this.dataModel.AdsId!=null ||this.dataModel.AdsId!=undefined)
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
    this.Service.ApiAdvertisementSaveAdvertisementPost(this.dataModel).subscribe( res=>{
    
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
    
    this.Service.ApiAdvertisementUpdateAdvertisementPut(this.dataModel).subscribe( res=>{
    
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
  GetAllMarket(){
    
    this.market.ApiMarketGetAllMarketGet().subscribe((data: any) => {
      debugger;
      this.ListMarket=data.Data;
    })
  }
  GetAllCategroy(){
    
    this.categroy.ApiCategoryGetAllCategoryGet().subscribe((data: any) => {
      debugger;
      this.ListCategroy=data.Data;
    })
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
  onSelectType(event){
    debugger;
    this.dataModel.AdsType=event as number;
  }
  onSelectCity(event) {

    this.dataModel.CityId=event;
    }
    onSelectCategroy(event){
      debugger;
      this.dataModel.CategoryId=event;
    }
    onSelectMarket(event){
      this.dataModel.MarketId=event;
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

    this.dataModel.AdsImage=result.Data;
   
    });

  }
  uploadVideo(event) {
    debugger;
    let files = event.target.files;
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.Service.UploadVedio(formData).subscribe(event => {
    debugger;
       const result= event as any;

    this.dataModel.AdsVideo=result.Data;
   
    });

  }
}


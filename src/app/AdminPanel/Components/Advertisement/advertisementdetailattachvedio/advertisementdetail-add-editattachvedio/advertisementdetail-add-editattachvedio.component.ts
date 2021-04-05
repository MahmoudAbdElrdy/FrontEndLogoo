import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { AdvertisementService, CityService, CategoryService, MarketService, AdvertisementUpdateService } from 'src/app/api/services';
import {AdvertisementVM} from 'src/app/api/models'
import { ActivatedRoute } from '@angular/router';
import { AdvertisementAttachVM } from 'src/app/api/models/advertisement-attach-vm';
@Component({
  selector: 'app-advertisementdetail-add-editattachvedio',
  templateUrl: './advertisementdetail-add-editattachvedio.component.html',
  styleUrls: ['./advertisementdetail-add-editattachvedio.component.css']
})
export class AdvertisementdetailAddEditattachvedioComponent implements OnInit {
  @ViewChild('videoPlayer',{static: false}) videoplayer: ElementRef;
  public dataModel: AdvertisementService.ApiAdvertisementNewSaveAdvertisementAttachPostParams;
  AttachUrl: any;
  formData: FormData;
  AdsImage: string;
  fileToUpload: File;
  constructor(public dialogRef: MatDialogRef<AdvertisementdetailAddEditattachvedioComponent>,private activatedRoute:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: AdvertisementVM,	private categroy:CategoryService,private market:MarketService,
    private Service : AdvertisementService,private _snackBar: MatSnackBar,
    	private ServiceCity : CityService, private ServiceUpdate : AdvertisementUpdateService) {
    //  this.dataModel =data;
   // this.action = this.dataModel.action;
     }
     ngOnInit() {
     
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
      
      
      this.DeleteUpdate();
    }
    SaveUpdate(){


this.DeleteUpdate();

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
    let AdsId1=this.activatedRoute.snapshot.queryParams['advertisementid']
 this.dataModel={AdsId:AdsId1,AttachType:1,AdsAttachId:null,AttachUrl:this.AttachUrl,CreationDate:null,File:this.fileToUpload };
   this.Service.ApiAdvertisementNewSaveAdvertisementAttachPost(this.dataModel).subscribe( res=>{
  
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

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
 
 
  uploadImage(event) {
    debugger;
    
    let files = event.target.files;
    this.fileToUpload = <File>files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
        this.AdsImage = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);

  }
  
}



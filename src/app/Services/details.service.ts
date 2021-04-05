import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject } from 'rxjs';
import { MatDialogRef, MatDialog, MatDialogConfig, MatSidenav } from '@angular/material';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import 'rxjs/Rx';

import { ReviewPopupComponent } from '../Global/ReviewPopup/ReviewPopup.component';
import { ConfirmationPopupComponent } from '../Global/ConfirmationPopup/ConfirmationPopup.component';
import { AdvertisementService } from '../api/services';

export class detailsService {
   advertisementid:any;
  NameWorkShop:any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
  List: any;
  Listadvertisementid:any;
  show=false;
sharedList:any;
constructor(private AdvertisementService:AdvertisementService,) {
this.sharedList=new Array;
//this.GetAllAdvertisementService('');
}
GetAllAdvertisementService(advertisementid){
    
   debugger
   this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:advertisementid,CustomerId:null};
   this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams)
   .subscribe((data: any) => {
      // this.show=true;
     this.sharedList=data.body.Data;
    
    
   })
 }


}

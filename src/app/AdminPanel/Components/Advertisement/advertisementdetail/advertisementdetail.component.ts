import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/api/services';
import { detailsService } from 'src/app/Services/details.service';

@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.component.html',
  styleUrls: ['./advertisementdetail.component.css'],
  providers:[detailsService]
})
export class AdvertisementdetailComponent implements OnInit {
  advertisementid:any;
  NameWorkShop:any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
  List: any;

  constructor( private router: Router,private AdvertisementService:AdvertisementService,private _dataShared:detailsService,
    
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
   
//this._dataShared.GetAllAdvertisementService(this.advertisementid);
  }
  // GetAllAdvertisementService(){
  //   debugger
  //   this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
  //   this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
  //     debugger
  //     this.List=data.body.Data;
  //     console.log(this.List);
  //    // return  this.List;
  //   })
  // }
  
}

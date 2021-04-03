import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/api/services';

@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.component.html',
  styleUrls: ['./advertisementdetail.component.css']
})
export class AdvertisementdetailComponent implements OnInit {
  advertisementid:any;
  NameWorkShop:any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
  List: any;

  constructor( private router: Router,private AdvertisementService:AdvertisementService,
    
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
   
this.GetAllAdvertisementService();
  }
  GetAllAdvertisementService(){
    
    this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
    this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
      debugger
      this.List=data.body.Data;
      console.log(this.List);
     // return  this.List;
    })
  }
  
}

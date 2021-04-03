import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advertisementdetail',
  templateUrl: './advertisementdetail.component.html',
  styleUrls: ['./advertisementdetail.component.css']
})
export class AdvertisementdetailComponent implements OnInit {
  advertisementid:any;
  NameWorkShop:any;
  constructor( private router: Router,
    
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
   

  }

  
}

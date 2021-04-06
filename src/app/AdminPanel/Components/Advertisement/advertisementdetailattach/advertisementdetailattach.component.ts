import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/api/services';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AdvertisementAddEditattachComponent } from './advertisement-add-editattach/advertisement-add-editattach.component';
import { AdvertisementAttachVM } from 'src/app/api/models/advertisement-attach-vm';
@Component({
  selector: 'app-advertisementdetailattach',
  templateUrl: './advertisementdetailattach.component.html',
  styleUrls: ['./advertisementdetailattach.component.css']
})
export class AdvertisementdetailattachComponent implements OnInit
 { 
   public data: AdvertisementAttachVM;
  public dataModel: AdvertisementAttachVM
  List 		      : any;
  id:any;
  @ViewChild('videoPlayer',{static: false}) videoplayer: ElementRef;
  @Input()advertisementid:any;
  @Input()Listadvertisementid:any;
  ApiAdvertisementGetAdvertisementDetailsGetParams: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams;
	displayedColumns : string [] = ['AttachType','AttachUrl','action' ];
  @ViewChild(MatPaginator,{static: false}) paginator : MatPaginator;
  
	@ViewChild(MatSort,{static: false}) sort           : MatSort;
  close: any;
  dataSource = new MatTableDataSource<AdvertisementAttachVM>();
  ListCategory: any;
	constructor(public translate : TranslateService,
					private router : Router, private AdvertisementService:AdvertisementService,
				 private dialog: MatDialog,private _snackBar: MatSnackBar,private activatedRoute:ActivatedRoute) { }

  
  ngOnInit() {
   
 // this.GetAllCategory();
   this.GetAllAdvertisementService();
}
toggleVideo(event: any) {
  this.videoplayer.nativeElement.play();
}
openNewTab(src) {
window.open(src);
}
 
  GetAllAdvertisementService(){
    this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
    this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
    this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
     
      this.List=data.body.Data.AdvertisementAttach.filter(x=>x.AttachType==0);
      console.log(this.List)
    })
  }
 
  openDialog(obj) {
   // obj.action = action;
   
    const dialogRef = this.dialog.open(AdvertisementAddEditattachComponent, {
      width: '400px',
      data:obj,
      disableClose:true
    }).afterClosed()
    .subscribe(result => {
     
      this.advertisementid= this.activatedRoute.snapshot.queryParams['advertisementid'];
    this.ApiAdvertisementGetAdvertisementDetailsGetParams={id:this.advertisementid,CustomerId:null};
    this.AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetResponse(this.ApiAdvertisementGetAdvertisementDetailsGetParams).subscribe((data: any) => {
     
      this.List=data.body.Data.AdvertisementAttach.filter(x=>x.AttachType==0);
      console.log(this.List)
    })
    });
  }
  
  delete(obj): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose:true
    });

    dialogRef.afterClosed().subscribe( dialogResult => {
      this.close = dialogResult;
      //this.result = dialogResult;
      debugger;
      if(dialogResult==false){
        this.AdvertisementService.ApiAdvertisementRemoveAdvertisementAttachDelete(obj).subscribe( res=>{
    
          if(res.IsPassed==true)
          {
            this._snackBar.open("تم الحذف بنجاح","حذف" ,{
              duration: 2220,
              
            });
            this.GetAllAdvertisementService();
          }
          else
          {
            this._snackBar.open(" الحذف لم يتم","حذف" ,{
              duration: 2220,
              
            });
          }
  
        })
       
      }
      else{

      }
     
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
 
}



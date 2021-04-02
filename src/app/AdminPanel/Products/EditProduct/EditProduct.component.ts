import { Component, OnInit } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
	selector: 'app-edit-product',
	templateUrl: './EditProduct.component.html',
	styleUrls: ['./EditProduct.component.scss']
})

export class EditProductComponent implements OnInit {

	editProductDetail    : any;
	mainImgPath   			: string;
	CategoryId     			: any;
	
	form			  			: FormGroup;

	
	constructor(private adminPanelService : AdminPanelServiceService,
					public formBuilder : FormBuilder,
					private route: ActivatedRoute,
               private router: Router) { }

	ngOnInit() {
		if(this.adminPanelService.editProductData) {
			debugger;
			this.editProductDetail = this.adminPanelService.editProductData;
			setTimeout(()=>{
				this.mainImgPath = this.editProductDetail.CategoryImage;
			},0)
		}

		this.route.params.subscribe(res => {
			this.CategoryId = res.CategoryId;
        // this.productType = res.type;
			this.getEditProductDetail();
      })

   	this.form = this.formBuilder.group({
			name					: [],
			
		});
   	this.getProductData();
	}

	/**
    * getImagePath is used to change the image path on click event. 
    */
   public getImagePath(imgPath: string, index:number) {
      document.querySelector('.border-active').classList.remove('border-active');
      this.mainImgPath = imgPath;
      document.getElementById(index+'_img').className += " border-active";
   }

   //getEditProductDetail method is used to get the edit product.
	public getEditProductDetail() {
      this.CategoryId = (this.CategoryId) ? this.CategoryId : 1;
      this.CategoryId = (this.CategoryId) ? this.CategoryId : 'Business';
      this.adminPanelService.getProducts().valueChanges().
      	subscribe(res => {this.getProductEditResponse(res)});
   }

   //getProductEditResponse method is used to according to the response edit poroduct data show.
   public getProductEditResponse(response) {
		let products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
      for(let data of products)
      {	
         if(data.CategoryId == this.CategoryId) {
            this.editProductDetail = data;
				this.mainImgPath = this.editProductDetail.CategoryImage;
				this.getProductData();
            break;
         }
      }
	}
	"data" : any = [
		{  
		   "image": "https://via.placeholder.com/625x800",
		   "image_gallery": [
			  "https://via.placeholder.com/625x800",
			  "https://via.placeholder.com/625x800",
			  "https://via.placeholder.com/625x800",
			  "https://via.placeholder.com/625x800",
			  "https://via.placeholder.com/625x800"
		   ]
		}
	 ]
	//getProductData method is used to get the product data.
	getProductData(){
		if(this.editProductDetail){
			this.form.patchValue({
				name   		 : this.editProductDetail.CategoryName,
				//price 		 : this.editProductDetail.price,
				//availablity  : this.editProductDetail.availablity,
				//product_code : this.editProductDetail.product_code,
				//description  : this.editProductDetail.description,
				////tags			 : this.editProductDetail.tags,
				//features 	 : this.editProductDetail.features
			});
		}
	}
}

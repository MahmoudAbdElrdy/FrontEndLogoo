import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MainAdminPanelComponent } from './Main/Main.component';
import { MenuToggleModule } from './Core/Menu/MenuToggle.module';
import { AdminMenuItems } from './Core/Menu/MenuItems/MenuItems';
import { SideBarComponent } from './Shared/SideBar/SideBar.component';
import { MenuListItemsComponent } from './Shared/MenuListItems/MenuListItems.component';
import { AdminHeaderComponent } from './Shared/Header/Header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, 
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule, 
         MatNativeDateModule, 
         MatProgressSpinnerModule,
         MatTableModule, 
         MatExpansionModule, 
         MatSelectModule,
         MatSnackBarModule, 
         MatTooltipModule, 
         MatChipsModule, 
         MatListModule, 
         MatSidenavModule, 
         MatTabsModule, 
         MatProgressBarModule,
         MatCheckboxModule,
         MatSliderModule,
         MatRadioModule,
         MatDialogModule,
		 MatGridListModule,
		 MatFormFieldModule,
         MatDividerModule,
         MatPaginatorModule,
         MatSortModule, 
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastaModule} from 'ngx-toasta';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AdminPanelRoutes } from './admin-panel-routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GlobalModule } from '../Global/Global.module';
import {CountryComponent} from './Components/Country/Country.component'
import { AddCountryComponent } from './Components/Country/AddCountry/AddCountry.component';
import { WidgetModule } from './Widget/Widget.module';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { CityComponent } from './Components/City/City.component';
import { CategoryComponent } from './Components/Category/Category.component';
import { AdvertisementComponent } from './Components/Advertisement/Advertisement.component';
import { CustomDatePipe } from './Shared/CustomDatePipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatVideoModule } from 'mat-video';
import { MarketComponent } from './Components/Market/Market.component';
import { AdminUsersComponent } from './Components/AdminUsers/AdminUsers.component';
import { AdvertisementdetailComponent } from './Components/Advertisement/advertisementdetail/advertisementdetail.component';
import { AdvertisementdetailcityComponent } from './Components/Advertisement/advertisementdetailcity/advertisementdetailcity.component';
import { AdvertisementAddEditCityComponent } from './Components/Advertisement/advertisementdetailcity/advertisement-add-edit-city/advertisement-add-edit-city.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [	
		MainAdminPanelComponent,AdminUsersComponent,
		SideBarComponent,
		MenuListItemsComponent,
		AdminHeaderComponent,CountryComponent,CityComponent,CategoryComponent,AdvertisementComponent,CustomDatePipe,MarketComponent, AdvertisementdetailComponent, AdvertisementdetailcityComponent, AdvertisementAddEditCityComponent
	],
	imports: [FormsModule, ReactiveFormsModule,WidgetModule,NgxPaginationModule,MatVideoModule,
		CommonModule,
		MenuToggleModule,
		
		MatButtonModule, 
		MatCardModule, 
      MatMenuModule, 
      FlexLayoutModule,
		MatToolbarModule, 
		MatIconModule, 
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule, 
		MatProgressSpinnerModule,
		MatTableModule, 
		MatExpansionModule, 
		MatSelectModule,
		MatSnackBarModule, 
		MatTooltipModule, 
		MatChipsModule, 
		MatListModule, 
		MatSidenavModule, 
		MatTabsModule, 
		MatProgressBarModule,
		MatCheckboxModule,
		MatSliderModule,
		MatRadioModule,
		MatDialogModule,
		MatGridListModule,
		PerfectScrollbarModule,
		RouterModule.forChild(AdminPanelRoutes),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		HttpClientModule,
		GlobalModule,
		ToastaModule.forRoot(),
		MatFormFieldModule,
		MatDividerModule,
		MatPaginatorModule,
		MatSortModule, 
	],
	providers : [
		AdminMenuItems
	],
	exports : [
		RouterModule,
		ToastaModule
	]

})

export class AdminPanelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { MainAdminPanelComponent } from './Main/Main.component';
import { CountryComponent } from './Components/Country/Country.component';
import { CityComponent } from './Components/City/City.component';
import { CategoryComponent } from './Components/Category/Category.component';
import { AdvertisementComponent } from './Components/Advertisement/Advertisement.component';
import { MarketComponent } from './Components/Market/Market.component';
import { AdminUsersComponent } from './Components/AdminUsers/AdminUsers.component';
import { AdvertisementdetailComponent } from './Components/Advertisement/advertisementdetail/advertisementdetail.component';

export const AdminPanelRoutes : Routes = [
   {
      path : 'admin-panel',
      redirectTo: 'admin-panel/reports',
      pathMatch: 'full',
   }, 
   {
      path : "admin-panel",
      component : MainAdminPanelComponent,
      children: [ 
         {
            path: 'reports',loadChildren: ()=>
            import('./Reports/Reports.module').then (m => m.ReportsModule)
         },
         {
            path: 'invoices',loadChildren: ()=>
            import('./Invoices/Invoices.module').then (m => m.InvoicesModule)
         },
         {
            path: '',loadChildren: ()=>
            import('./Products/Products.module').then(m => m.ProductsModule)
         },
         {
            path: 'account',loadChildren: ()=>
            import('./AdminAccount/AdminAccount.module').then (m => m.AdminAccountModule)
         },
         {
            path:'Country',
             component:CountryComponent
   
            },{
               path:'City',
               component:CityComponent
            }
            ,{
               path:'Category',
               component:CategoryComponent
            },
            {
               path:'Advertisement',
               component:AdvertisementComponent
            },
            //MarketComponent
            {
               path:'Market',
               component:MarketComponent
            },
            //AdminUsersComponent
            {
               path:'Admin',
               component:AdminUsersComponent
            },
            {
               path:'Advertisementdetail',
               component:AdvertisementdetailComponent
            },
      ]
   }
]
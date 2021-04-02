/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AboutUsService } from './services/about-us.service';
import { AdminUsersService } from './services/admin-users.service';
import { AdvertisementService } from './services/advertisement.service';
import { AdvertisementOpenService } from './services/advertisement-open.service';
import { AdvertisementUpdateService } from './services/advertisement-update.service';
import { AdvertisementViewService } from './services/advertisement-view.service';
import { CategoryService } from './services/category.service';
import { CityService } from './services/city.service';
import { ContactUsService } from './services/contact-us.service';
import { ContactUsMarketService } from './services/contact-us-market.service';
import { CountryService } from './services/country.service';
import { CustomerService } from './services/customer.service';
import { CustomerLoginService } from './services/customer-login.service';
import { MarketService } from './services/market.service';
import { MarketFollowService } from './services/market-follow.service';
import { PrivacyService } from './services/privacy.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AboutUsService,
    AdminUsersService,
    AdvertisementService,
    AdvertisementOpenService,
    AdvertisementUpdateService,
    AdvertisementViewService,
    CategoryService,
    CityService,
    ContactUsService,
    ContactUsMarketService,
    CountryService,
    CustomerService,
    CustomerLoginService,
    MarketService,
    MarketFollowService,
    PrivacyService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}

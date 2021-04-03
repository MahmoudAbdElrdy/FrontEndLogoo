/* tslint:disable */
import { AdvertisementAttachVM } from './advertisement-attach-vm';
import { AdvertisementCategoryVM } from './advertisement-category-vm';
import { AdvertisementCityIncloudVM } from './advertisement-city-incloud-vm';
export interface AdvertisementIncloudVM  {
  AdsId?: string;
  AdsImage?: string;
  AdsName?: string;
  AdsText?: string;
  AdsType?: number;
  AdsVideo?: string;
  AdvertisementAttach?: Array<AdvertisementAttachVM>;
  AdvertisementCategory?: Array<AdvertisementCategoryVM>;
  AdvertisementCity?: Array<AdvertisementCityIncloudVM>;
  Available?: boolean;
  CreationDate?: string;
  EndDate?: string;
  MarketId?: string;
  Special?: boolean;
  StartDate?: string;
  WaitingUpdate?: boolean;
}

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdvertisementIncloudVM } from '../models/advertisement-incloud-vm';
import { AdvertisementVM } from '../models/advertisement-vm';
import { AdvertisementAttachVM } from '../models/advertisement-attach-vm';
import { AdvertisementCategoryVM } from '../models/advertisement-category-vm';
import { AdvertisementCityVM } from '../models/advertisement-city-vm';
@Injectable({
  providedIn: 'root',
})
class AdvertisementService extends __BaseService {
  static readonly ApiAdvertisementSaveAdvertisementPostPath = '/api/Advertisement/SaveAdvertisement';
  static readonly ApiAdvertisementNewSaveAdvertisementAttachPostPath = '/api/Advertisement/NewSaveAdvertisementAttach';
  static readonly ApiAdvertisementUpdateAdvertisementPutPath = '/api/Advertisement/UpdateAdvertisement';
  static readonly ApiAdvertisementGetAllAdvertisementGetPath = '/api/Advertisement/GetAllAdvertisement';
  static readonly ApiAdvertisementGetNewAdvertisementGetPath = '/api/Advertisement/GetNewAdvertisement';
  static readonly ApiAdvertisementGetAdvertisementByIdGetPath = '/api/Advertisement/GetAdvertisementById';
  static readonly ApiAdvertisementGetAdvertisementDetailsGetPath = '/api/Advertisement/GetAdvertisementDetails';
  static readonly ApiAdvertisementGetAdvertisementByMarketIdGetPath = '/api/Advertisement/GetAdvertisementByMarketId';
  static readonly ApiAdvertisementGetAdvertisementByCityIdGetPath = '/api/Advertisement/GetAdvertisementByCityId';
  static readonly ApiAdvertisementGetAdvertisementByCategoryGetPath = '/api/Advertisement/GetAdvertisementByCategory';
  static readonly ApiAdvertisementGetAdvertisementByCategoryForAllCityGetPath = '/api/Advertisement/GetAdvertisementByCategoryForAllCity';
  static readonly ApiAdvertisementRemoveAdvertisementDeletePath = '/api/Advertisement/RemoveAdvertisement';
  static readonly ApiAdvertisementRemoveAdvertisementAttachDeletePath = '/api/Advertisement/RemoveAdvertisementAttach';
  static readonly ApiUploadUploadAdvertisementPostPath = '/api/Upload/UploadAdvertisement';
  static readonly ApiAdvertisementGetAllAdvertisementSTPGetPath = '/api/Advertisement/GetAllAdvertisementSTP';
  static readonly ApiAdvertisementSaveAdvertisementCategoryPostPath = '/api/Advertisement/SaveAdvertisementCategory';
  static readonly ApiAdvertisementSaveAdvertisementCityPostPath = '/api/Advertisement/SaveAdvertisementCity';
  static readonly ApiAdvertisementRemoveAdvertisementCityDeletePath = '/api/Advertisement/RemoveAdvertisementCity';
  static readonly ApiAdvertisementRemoveAdvertisementCategoryDeletePath = '/api/Advertisement/RemoveAdvertisementCategory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementPostResponse(AdvertisementVM?: AdvertisementIncloudVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Advertisement/SaveAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementPost(AdvertisementVM?: AdvertisementIncloudVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementSaveAdvertisementPostResponse(AdvertisementVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementNewSaveAdvertisementAttachPostParams` containing the following parameters:
   *
   * - `CreationDate`:
   *
   * - `AttachType`:
   *
   * - `AdsId`:
   *
   * - `AdsAttachId`:
   *
   * - `Notes`:
   *
   * - `File`:
   *
   * - `Available`:
   *
   * - `AttachUrl`:
   *
   * @return Success
   */
  ApiAdvertisementNewSaveAdvertisementAttachPostResponse(params: AdvertisementService.ApiAdvertisementNewSaveAdvertisementAttachPostParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
    let __body: any = null;
    let __formData = new FormData();
    
   // let headers =new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
   // const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
    // DON'T SET THE Content-Type to multipart/form-data, You'll get the Missing content-type boundary error
   debugger
    __body = __formData;
    if (params.CreationDate != null) { __formData.append('CreationDate', params.CreationDate as string | Blob);}
    if (params.AttachType != null) { __formData.append('AttachType', JSON.stringify(params.AttachType));}
    if (params.AdsId != null) { __formData.append('AdsId', params.AdsId as string | Blob);}
    if (params.AdsAttachId != null) { __formData.append('AdsAttachId', params.AdsAttachId as string | Blob);}
    if (params.Notes != null) { __formData.append('Notes', params.Notes as string | Blob);}
    if (params.File != null)  __formData.append('File', params.File);
    if (params.Available != null) { __formData.append('Available', JSON.stringify(params.Available));}
    if (params.AttachUrl != null) { __formData.append('AttachUrl', params.AttachUrl as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Advertisement/NewSaveAdvertisementAttach`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementNewSaveAdvertisementAttachPostParams` containing the following parameters:
   *
   * - `CreationDate`:
   *
   * - `AttachType`:
   *
   * - `AdsId`:
   *
   * - `AdsAttachId`:
   *
   * - `Notes`:
   *
   * - `File`:
   *
   * - `Available`:
   *
   * - `AttachUrl`:
   *
   * @return Success
   */
  ApiAdvertisementNewSaveAdvertisementAttachPost(params: AdvertisementService.ApiAdvertisementNewSaveAdvertisementAttachPostParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementNewSaveAdvertisementAttachPostResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateAdvertisementPutResponse(AdvertisementVM?: AdvertisementIncloudVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Advertisement/UpdateAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateAdvertisementPut(AdvertisementVM?: AdvertisementIncloudVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateAdvertisementPutResponse(AdvertisementVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAdvertisementGetAllAdvertisementGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAllAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @return Success
   */
  ApiAdvertisementGetAllAdvertisementGet(): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAllAdvertisementGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetNewAdvertisementGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetNewAdvertisementGetResponse(params: AdvertisementService.ApiAdvertisementGetNewAdvertisementGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetNewAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetNewAdvertisementGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetNewAdvertisementGet(params: AdvertisementService.ApiAdvertisementGetNewAdvertisementGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetNewAdvertisementGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementById`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementDetailsGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementDetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementDetailsGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementDetailsGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementDetailsGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `marketId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByMarketIdGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.marketId != null) __params = __params.set('marketId', params.marketId.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementByMarketId`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `marketId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByMarketIdGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByMarketIdGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCityIdGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `cityId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCityIdGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCityIdGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.cityId != null) __params = __params.set('cityId', params.cityId.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementByCityId`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCityIdGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `cityId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCityIdGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCityIdGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByCityIdGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `cityId`:
   *
   * - `categoryId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCategoryGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.cityId != null) __params = __params.set('cityId', params.cityId.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementByCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `cityId`:
   *
   * - `categoryId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
   UploadImage(formData){
 
    return     this.http.post(  this.rootUrl + `/api/Upload/UploadMarketLog`, formData);
     
  }
  UploadVedio(formData){
 
    return     this.http.post(  this.rootUrl + `/api/Upload/UploadAdvertisement`, formData);
     
  }
  ApiAdvertisementGetAdvertisementByCategoryGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByCategoryGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryForAllCityGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `categoryId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCategoryForAllCityGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryForAllCityGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
    if (params.CustomerId != null) __params = __params.set('CustomerId', params.CustomerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAdvertisementByCategoryForAllCity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryForAllCityGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `categoryId`:
   *
   * - `CustomerId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCategoryForAllCityGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryForAllCityGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByCategoryForAllCityGetResponse(params).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementDeleteResponse(AdvertisementVM?: AdvertisementVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Advertisement/RemoveAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementDelete(AdvertisementVM?: AdvertisementVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementDeleteResponse(AdvertisementVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementAttachVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementAttachDeleteResponse(AdvertisementAttachVM?: AdvertisementAttachVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementAttachVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Advertisement/RemoveAdvertisementAttach`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementAttachVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementAttachDelete(AdvertisementAttachVM?: AdvertisementAttachVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementAttachDeleteResponse(AdvertisementAttachVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  ApiUploadUploadAdvertisementPostResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Upload/UploadAdvertisement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  ApiUploadUploadAdvertisementPost(): __Observable<null> {
    return this.ApiUploadUploadAdvertisementPostResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return Success
   */
  ApiAdvertisementGetAllAdvertisementSTPGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Advertisement/GetAllAdvertisementSTP`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @return Success
   */
  ApiAdvertisementGetAllAdvertisementSTPGet(): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAllAdvertisementSTPGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementCategoryVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementCategoryPostResponse(AdvertisementCategoryVM?: AdvertisementCategoryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementCategoryVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Advertisement/SaveAdvertisementCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementCategoryVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementCategoryPost(AdvertisementCategoryVM?: AdvertisementCategoryVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementSaveAdvertisementCategoryPostResponse(AdvertisementCategoryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementCityVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementCityPostResponse(AdvertisementCityVM?: AdvertisementCityVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementCityVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Advertisement/SaveAdvertisementCity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementCityVM undefined
   * @return Success
   */
  ApiAdvertisementSaveAdvertisementCityPost(AdvertisementCityVM?: AdvertisementCityVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementSaveAdvertisementCityPostResponse(AdvertisementCityVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementCityVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementCityDeleteResponse(AdvertisementCityVM?: AdvertisementCityVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementCityVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Advertisement/RemoveAdvertisementCity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementCityVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementCityDelete(AdvertisementCityVM?: AdvertisementCityVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementCityDeleteResponse(AdvertisementCityVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementCategoryVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementCategoryDeleteResponse(AdvertisementCategoryVM?: AdvertisementCategoryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementCategoryVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Advertisement/RemoveAdvertisementCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }
  /**
   * @param AdvertisementCategoryVM undefined
   * @return Success
   */
  ApiAdvertisementRemoveAdvertisementCategoryDelete(AdvertisementCategoryVM?: AdvertisementCategoryVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementCategoryDeleteResponse(AdvertisementCategoryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AdvertisementService {

  /**
   * Parameters for ApiAdvertisementNewSaveAdvertisementAttachPost
   */
  export interface ApiAdvertisementNewSaveAdvertisementAttachPostParams {
    CreationDate: string;
    AttachType: number;
    AdsId: string;
    AdsAttachId: string;
    Notes?: string;
    File?: any;
    Available?: boolean;
    AttachUrl?: string;
  }

  /**
   * Parameters for ApiAdvertisementGetNewAdvertisementGet
   */
  export interface ApiAdvertisementGetNewAdvertisementGetParams {
    page: number;
    CustomerId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementDetailsGet
   */
  export interface ApiAdvertisementGetAdvertisementDetailsGetParams {
    id: string;
    CustomerId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByMarketIdGet
   */
  export interface ApiAdvertisementGetAdvertisementByMarketIdGetParams {
    page: number;
    marketId: string;
    CustomerId?: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByCityIdGet
   */
  export interface ApiAdvertisementGetAdvertisementByCityIdGetParams {
    page: number;
    cityId: string;
    CustomerId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByCategoryGet
   */
  export interface ApiAdvertisementGetAdvertisementByCategoryGetParams {
    page: number;
    cityId: string;
    categoryId: string;
    CustomerId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByCategoryForAllCityGet
   */
  export interface ApiAdvertisementGetAdvertisementByCategoryForAllCityGetParams {
    page: number;
    categoryId: string;
    CustomerId: string;
  }
}

export { AdvertisementService }

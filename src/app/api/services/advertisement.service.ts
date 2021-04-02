/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdvertisementVM } from '../models/advertisement-vm';
@Injectable({
  providedIn: 'root',
})
class AdvertisementService extends __BaseService {
  static readonly ApiAdvertisementSaveAdvertisementPostPath = '/api/Advertisement/SaveAdvertisement';
  static readonly ApiAdvertisementUpdateAdvertisementPutPath = '/api/Advertisement/UpdateAdvertisement';
  static readonly ApiAdvertisementGetAllAdvertisementGetPath = '/api/Advertisement/GetAllAdvertisement';
  static readonly ApiAdvertisementGetAdvertisementByIdGetPath = '/api/Advertisement/GetAdvertisementById';
  static readonly ApiAdvertisementGetAdvertisementByMarketIdGetPath = '/api/Advertisement/GetAdvertisementByMarketId';
  static readonly ApiAdvertisementGetAdvertisementByCityIdGetPath = '/api/Advertisement/GetAdvertisementByCityId';
  static readonly ApiAdvertisementGetAdvertisementByCategoryGetPath = '/api/Advertisement/GetAdvertisementByCategory';
  static readonly ApiAdvertisementRemoveAdvertisementDeletePath = '/api/Advertisement/RemoveAdvertisement';
  static readonly ApiUploadUploadAdvertisementPostPath = '/api/Upload/UploadAdvertisement';
  static readonly ApiCityGetAllAdvertisementSTPGetPath = '/api/City/GetAllAdvertisementSTP';

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
  ApiAdvertisementSaveAdvertisementPostResponse(AdvertisementVM?: AdvertisementVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
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
  ApiAdvertisementSaveAdvertisementPost(AdvertisementVM?: AdvertisementVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementSaveAdvertisementPostResponse(AdvertisementVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateAdvertisementPutResponse(AdvertisementVM?: AdvertisementVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
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
  ApiAdvertisementUpdateAdvertisementPut(AdvertisementVM?: AdvertisementVM): __Observable<IResponseDTO> {
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
   * @param params The `AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams` containing the following parameters:
   *
   * - `page`:
   *
   * - `marketId`:
   *
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByMarketIdGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByMarketIdGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.marketId != null) __params = __params.set('marketId', params.marketId.toString());
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
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCityIdGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCityIdGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.cityId != null) __params = __params.set('cityId', params.cityId.toString());
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
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCategoryGetResponse(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.cityId != null) __params = __params.set('cityId', params.cityId.toString());
    if (params.categoryId != null) __params = __params.set('categoryId', params.categoryId.toString());
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
   * @return Success
   */
  ApiAdvertisementGetAdvertisementByCategoryGet(params: AdvertisementService.ApiAdvertisementGetAdvertisementByCategoryGetParams): __Observable<IResponseDTO> {
    return this.ApiAdvertisementGetAdvertisementByCategoryGetResponse(params).pipe(
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
  UploadImage(formData){
 
    return     this.http.post(  this.rootUrl + `/api/Upload/UploadMarketLog`, formData);
     
  }
  UploadVedio(formData){
 
    return     this.http.post(  this.rootUrl + `/api/Upload/UploadAdvertisement`, formData);
     
  }
  ApiAdvertisementRemoveAdvertisementDelete(AdvertisementVM?: AdvertisementVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementDeleteResponse(AdvertisementVM).pipe(
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
}

module AdvertisementService {

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByMarketIdGet
   */
  export interface ApiAdvertisementGetAdvertisementByMarketIdGetParams {
    page: number;
    marketId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByCityIdGet
   */
  export interface ApiAdvertisementGetAdvertisementByCityIdGetParams {
    page: number;
    cityId: string;
  }

  /**
   * Parameters for ApiAdvertisementGetAdvertisementByCategoryGet
   */
  export interface ApiAdvertisementGetAdvertisementByCategoryGetParams {
    page: number;
    cityId: string;
    categoryId: string;
  }
}

export { AdvertisementService }

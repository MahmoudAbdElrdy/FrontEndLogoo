/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdvertisementUpdateVM } from '../models/advertisement-update-vm';
@Injectable({
  providedIn: 'root',
})
class AdvertisementUpdateService extends __BaseService {
  static readonly ApiAdvertisementUpdateSaveAdvertisementUpdatePostPath = '/api/AdvertisementUpdate/SaveAdvertisementUpdate';
  static readonly ApiAdvertisementUpdateUpdateAdvertisementUpdatePutPath = '/api/AdvertisementUpdate/UpdateAdvertisementUpdate';
  static readonly ApiAdvertisementUpdateGetAllAdvertisementUpdateGetPath = '/api/AdvertisementUpdate/GetAllAdvertisementUpdate';
  static readonly ApiAdvertisementUpdateGetAdvertisementUpdateByIdGetPath = '/api/AdvertisementUpdate/GetAdvertisementUpdateById';
  static readonly ApiAdvertisementUpdateRemoveAdvertisementUpdateDeletePath = '/api/AdvertisementUpdate/RemoveAdvertisementUpdate';
 //GetAdvertisementWaitingUpdate
 static readonly ApiAdvertisementRemoveAdvertisementDeletePath = '/api/AdvertisementUpdate/RemoveAdvertisementUpdate';
 static readonly ApiAdvertisementUpdateGetAdvertisementWaitingUpdateGetPath = '/api/AdvertisementUpdate/GetAdvertisementWaitingUpdate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  ApiAdvertisementRemoveAdvertisementUpdateDeleteResponse(AdvertisementVM?: AdvertisementUpdateVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AdvertisementUpdate/RemoveAdvertisementUpdate`,
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
  
  ApiAdvertisementRemoveAdvertisementUpdateDelete(AdvertisementVM?: AdvertisementUpdateVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementRemoveAdvertisementUpdateDeleteResponse(AdvertisementVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  /**
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateSaveAdvertisementUpdatePostResponse(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementUpdateVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AdvertisementUpdate/SaveAdvertisementUpdate`,
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
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateSaveAdvertisementUpdatePost(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateSaveAdvertisementUpdatePostResponse(AdvertisementUpdateVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateUpdateAdvertisementUpdatePutResponse(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementUpdateVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/AdvertisementUpdate/UpdateAdvertisementUpdate`,
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
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateUpdateAdvertisementUpdatePut(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateUpdateAdvertisementUpdatePutResponse(AdvertisementUpdateVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAdvertisementUpdateGetAllAdvertisementUpdateGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementUpdate/GetAllAdvertisementUpdate`,
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
  ApiAdvertisementUpdateGetAllAdvertisementUpdateGet(): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateGetAllAdvertisementUpdateGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAdvertisementUpdateGetAdvertisementUpdateByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementUpdate/GetAdvertisementUpdateById`,
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
  ApiAdvertisementUpdateGetAdvertisementUpdateByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateGetAdvertisementUpdateByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  ApiAdvertisementUpdateGetAdvertisementWaitingUpdateGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementUpdate/GetAdvertisementWaitingUpdate`,
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
  ApiAdvertisementUpdateGetAdvertisementWaitingUpdatedGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateGetAdvertisementWaitingUpdateGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateRemoveAdvertisementUpdateDeleteResponse(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementUpdateVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AdvertisementUpdate/RemoveAdvertisementUpdate`,
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
   * @param AdvertisementUpdateVM undefined
   * @return Success
   */
  ApiAdvertisementUpdateRemoveAdvertisementUpdateDelete(AdvertisementUpdateVM?: AdvertisementUpdateVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementUpdateRemoveAdvertisementUpdateDeleteResponse(AdvertisementUpdateVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AdvertisementUpdateService {
}

export { AdvertisementUpdateService }

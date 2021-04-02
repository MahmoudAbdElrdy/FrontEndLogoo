/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdvertisementViewVM } from '../models/advertisement-view-vm';
@Injectable({
  providedIn: 'root',
})
class AdvertisementViewService extends __BaseService {
  static readonly ApiAdvertisementViewSaveAdvertisementViewPostPath = '/api/AdvertisementView/SaveAdvertisementView';
  static readonly ApiAdvertisementViewUpdateAdvertisementViewPutPath = '/api/AdvertisementView/UpdateAdvertisementView';
  static readonly ApiAdvertisementViewGetAllAdvertisementViewGetPath = '/api/AdvertisementView/GetAllAdvertisementView';
  static readonly ApiAdvertisementViewGetAdvertisementViewByIdGetPath = '/api/AdvertisementView/GetAdvertisementViewById';
  static readonly ApiAdvertisementViewRemoveAdvertisementViewDeletePath = '/api/AdvertisementView/RemoveAdvertisementView';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewSaveAdvertisementViewPostResponse(AdvertisementViewVM?: AdvertisementViewVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementViewVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AdvertisementView/SaveAdvertisementView`,
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
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewSaveAdvertisementViewPost(AdvertisementViewVM?: AdvertisementViewVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementViewSaveAdvertisementViewPostResponse(AdvertisementViewVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewUpdateAdvertisementViewPutResponse(AdvertisementViewVM?: AdvertisementViewVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementViewVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/AdvertisementView/UpdateAdvertisementView`,
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
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewUpdateAdvertisementViewPut(AdvertisementViewVM?: AdvertisementViewVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementViewUpdateAdvertisementViewPutResponse(AdvertisementViewVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAdvertisementViewGetAllAdvertisementViewGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementView/GetAllAdvertisementView`,
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
  ApiAdvertisementViewGetAllAdvertisementViewGet(): __Observable<IResponseDTO> {
    return this.ApiAdvertisementViewGetAllAdvertisementViewGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAdvertisementViewGetAdvertisementViewByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementView/GetAdvertisementViewById`,
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
  ApiAdvertisementViewGetAdvertisementViewByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdvertisementViewGetAdvertisementViewByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewRemoveAdvertisementViewDeleteResponse(AdvertisementViewVM?: AdvertisementViewVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementViewVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AdvertisementView/RemoveAdvertisementView`,
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
   * @param AdvertisementViewVM undefined
   * @return Success
   */
  ApiAdvertisementViewRemoveAdvertisementViewDelete(AdvertisementViewVM?: AdvertisementViewVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementViewRemoveAdvertisementViewDeleteResponse(AdvertisementViewVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AdvertisementViewService {
}

export { AdvertisementViewService }

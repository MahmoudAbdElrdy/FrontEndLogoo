/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdvertisementOpenVM } from '../models/advertisement-open-vm';
@Injectable({
  providedIn: 'root',
})
class AdvertisementOpenService extends __BaseService {
  static readonly ApiAdvertisementOpenSaveAdvertisementOpenPostPath = '/api/AdvertisementOpen/SaveAdvertisementOpen';
  static readonly ApiAdvertisementOpenUpdateAdvertisementOpenPutPath = '/api/AdvertisementOpen/UpdateAdvertisementOpen';
  static readonly ApiAdvertisementOpenGetAllAdvertisementOpenGetPath = '/api/AdvertisementOpen/GetAllAdvertisementOpen';
  static readonly ApiAdvertisementOpenGetAdvertisementOpenByIdGetPath = '/api/AdvertisementOpen/GetAdvertisementOpenById';
  static readonly ApiAdvertisementOpenRemoveAdvertisementOpenDeletePath = '/api/AdvertisementOpen/RemoveAdvertisementOpen';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenSaveAdvertisementOpenPostResponse(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementOpenVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AdvertisementOpen/SaveAdvertisementOpen`,
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
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenSaveAdvertisementOpenPost(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementOpenSaveAdvertisementOpenPostResponse(AdvertisementOpenVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenUpdateAdvertisementOpenPutResponse(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementOpenVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/AdvertisementOpen/UpdateAdvertisementOpen`,
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
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenUpdateAdvertisementOpenPut(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementOpenUpdateAdvertisementOpenPutResponse(AdvertisementOpenVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAdvertisementOpenGetAllAdvertisementOpenGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementOpen/GetAllAdvertisementOpen`,
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
  ApiAdvertisementOpenGetAllAdvertisementOpenGet(): __Observable<IResponseDTO> {
    return this.ApiAdvertisementOpenGetAllAdvertisementOpenGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAdvertisementOpenGetAdvertisementOpenByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdvertisementOpen/GetAdvertisementOpenById`,
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
  ApiAdvertisementOpenGetAdvertisementOpenByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdvertisementOpenGetAdvertisementOpenByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenRemoveAdvertisementOpenDeleteResponse(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdvertisementOpenVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AdvertisementOpen/RemoveAdvertisementOpen`,
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
   * @param AdvertisementOpenVM undefined
   * @return Success
   */
  ApiAdvertisementOpenRemoveAdvertisementOpenDelete(AdvertisementOpenVM?: AdvertisementOpenVM): __Observable<IResponseDTO> {
    return this.ApiAdvertisementOpenRemoveAdvertisementOpenDeleteResponse(AdvertisementOpenVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AdvertisementOpenService {
}

export { AdvertisementOpenService }

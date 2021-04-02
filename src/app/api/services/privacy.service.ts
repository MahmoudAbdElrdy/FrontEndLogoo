/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { PrivacyVM } from '../models/privacy-vm';
@Injectable({
  providedIn: 'root',
})
class PrivacyService extends __BaseService {
  static readonly ApiPrivacySavePrivacyPostPath = '/api/Privacy/SavePrivacy';
  static readonly ApiPrivacyUpdatePrivacyPutPath = '/api/Privacy/UpdatePrivacy';
  static readonly ApiPrivacyGetAllPrivacyGetPath = '/api/Privacy/GetAllPrivacy';
  static readonly ApiPrivacyGetPrivacyByIdGetPath = '/api/Privacy/GetPrivacyById';
  static readonly ApiPrivacyRemovePrivacyDeletePath = '/api/Privacy/RemovePrivacy';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacySavePrivacyPostResponse(PrivacyVM?: PrivacyVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = PrivacyVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Privacy/SavePrivacy`,
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
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacySavePrivacyPost(PrivacyVM?: PrivacyVM): __Observable<IResponseDTO> {
    return this.ApiPrivacySavePrivacyPostResponse(PrivacyVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacyUpdatePrivacyPutResponse(PrivacyVM?: PrivacyVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = PrivacyVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Privacy/UpdatePrivacy`,
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
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacyUpdatePrivacyPut(PrivacyVM?: PrivacyVM): __Observable<IResponseDTO> {
    return this.ApiPrivacyUpdatePrivacyPutResponse(PrivacyVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiPrivacyGetAllPrivacyGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Privacy/GetAllPrivacy`,
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
  ApiPrivacyGetAllPrivacyGet(): __Observable<IResponseDTO> {
    return this.ApiPrivacyGetAllPrivacyGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiPrivacyGetPrivacyByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Privacy/GetPrivacyById`,
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
  ApiPrivacyGetPrivacyByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiPrivacyGetPrivacyByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacyRemovePrivacyDeleteResponse(PrivacyVM?: PrivacyVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = PrivacyVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Privacy/RemovePrivacy`,
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
   * @param PrivacyVM undefined
   * @return Success
   */
  ApiPrivacyRemovePrivacyDelete(PrivacyVM?: PrivacyVM): __Observable<IResponseDTO> {
    return this.ApiPrivacyRemovePrivacyDeleteResponse(PrivacyVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module PrivacyService {
}

export { PrivacyService }

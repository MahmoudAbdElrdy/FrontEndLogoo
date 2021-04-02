/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AboutUsVM } from '../models/about-us-vm';
@Injectable({
  providedIn: 'root',
})
class AboutUsService extends __BaseService {
  static readonly ApiAboutUsSaveAboutUsPostPath = '/api/AboutUs/SaveAboutUs';
  static readonly ApiAboutUsUpdateAboutUsPutPath = '/api/AboutUs/UpdateAboutUs';
  static readonly ApiAboutUsGetAllAboutUsGetPath = '/api/AboutUs/GetAllAboutUs';
  static readonly ApiAboutUsGetAboutUsByIdGetPath = '/api/AboutUs/GetAboutUsById';
  static readonly ApiAboutUsGetAboutUsGetPath = '/api/AboutUs/GetAboutUs';
  static readonly ApiAboutUsRemoveAboutUsDeletePath = '/api/AboutUs/RemoveAboutUs';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsSaveAboutUsPostResponse(AboutUsVM?: AboutUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AboutUsVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AboutUs/SaveAboutUs`,
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
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsSaveAboutUsPost(AboutUsVM?: AboutUsVM): __Observable<IResponseDTO> {
    return this.ApiAboutUsSaveAboutUsPostResponse(AboutUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsUpdateAboutUsPutResponse(AboutUsVM?: AboutUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AboutUsVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/AboutUs/UpdateAboutUs`,
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
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsUpdateAboutUsPut(AboutUsVM?: AboutUsVM): __Observable<IResponseDTO> {
    return this.ApiAboutUsUpdateAboutUsPutResponse(AboutUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAboutUsGetAllAboutUsGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AboutUs/GetAllAboutUs`,
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
  ApiAboutUsGetAllAboutUsGet(): __Observable<IResponseDTO> {
    return this.ApiAboutUsGetAllAboutUsGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAboutUsGetAboutUsByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AboutUs/GetAboutUsById`,
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
  ApiAboutUsGetAboutUsByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAboutUsGetAboutUsByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAboutUsGetAboutUsGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AboutUs/GetAboutUs`,
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
  ApiAboutUsGetAboutUsGet(): __Observable<IResponseDTO> {
    return this.ApiAboutUsGetAboutUsGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsRemoveAboutUsDeleteResponse(AboutUsVM?: AboutUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AboutUsVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AboutUs/RemoveAboutUs`,
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
   * @param AboutUsVM undefined
   * @return Success
   */
  ApiAboutUsRemoveAboutUsDelete(AboutUsVM?: AboutUsVM): __Observable<IResponseDTO> {
    return this.ApiAboutUsRemoveAboutUsDeleteResponse(AboutUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AboutUsService {
}

export { AboutUsService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { ContactUsMarketVM } from '../models/contact-us-market-vm';
@Injectable({
  providedIn: 'root',
})
class ContactUsMarketService extends __BaseService {
  static readonly ApiContactUsMarketSaveContactUsMarketPostPath = '/api/ContactUsMarket/SaveContactUsMarket';
  static readonly ApiContactUsMarketUpdateContactUsMarketPutPath = '/api/ContactUsMarket/UpdateContactUsMarket';
  static readonly ApiContactUsMarketGetAllContactUsMarketGetPath = '/api/ContactUsMarket/GetAllContactUsMarket';
  static readonly ApiContactUsMarketGetContactUsMarketByIdGetPath = '/api/ContactUsMarket/GetContactUsMarketById';
  static readonly ApiContactUsMarketRemoveContactUsMarketDeletePath = '/api/ContactUsMarket/RemoveContactUsMarket';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketSaveContactUsMarketPostResponse(ContactUsMarketVM?: ContactUsMarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsMarketVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ContactUsMarket/SaveContactUsMarket`,
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
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketSaveContactUsMarketPost(ContactUsMarketVM?: ContactUsMarketVM): __Observable<IResponseDTO> {
    return this.ApiContactUsMarketSaveContactUsMarketPostResponse(ContactUsMarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketUpdateContactUsMarketPutResponse(ContactUsMarketVM?: ContactUsMarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsMarketVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ContactUsMarket/UpdateContactUsMarket`,
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
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketUpdateContactUsMarketPut(ContactUsMarketVM?: ContactUsMarketVM): __Observable<IResponseDTO> {
    return this.ApiContactUsMarketUpdateContactUsMarketPutResponse(ContactUsMarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiContactUsMarketGetAllContactUsMarketGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ContactUsMarket/GetAllContactUsMarket`,
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
  ApiContactUsMarketGetAllContactUsMarketGet(): __Observable<IResponseDTO> {
    return this.ApiContactUsMarketGetAllContactUsMarketGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiContactUsMarketGetContactUsMarketByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ContactUsMarket/GetContactUsMarketById`,
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
  ApiContactUsMarketGetContactUsMarketByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiContactUsMarketGetContactUsMarketByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketRemoveContactUsMarketDeleteResponse(ContactUsMarketVM?: ContactUsMarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsMarketVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ContactUsMarket/RemoveContactUsMarket`,
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
   * @param ContactUsMarketVM undefined
   * @return Success
   */
  ApiContactUsMarketRemoveContactUsMarketDelete(ContactUsMarketVM?: ContactUsMarketVM): __Observable<IResponseDTO> {
    return this.ApiContactUsMarketRemoveContactUsMarketDeleteResponse(ContactUsMarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module ContactUsMarketService {
}

export { ContactUsMarketService }

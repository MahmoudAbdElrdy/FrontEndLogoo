/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { MarketFollowVM } from '../models/market-follow-vm';
@Injectable({
  providedIn: 'root',
})
class MarketFollowService extends __BaseService {
  static readonly ApiMarketFollowSaveMarketFollowPostPath = '/api/MarketFollow/SaveMarketFollow';
  static readonly ApiMarketFollowUpdateMarketFollowPutPath = '/api/MarketFollow/UpdateMarketFollow';
  static readonly ApiMarketFollowGetAllMarketFollowGetPath = '/api/MarketFollow/GetAllMarketFollow';
  static readonly ApiMarketFollowGetMarketFollowByIdGetPath = '/api/MarketFollow/GetMarketFollowById';
  static readonly ApiMarketFollowRemoveMarketFollowDeletePath = '/api/MarketFollow/RemoveMarketFollow';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowSaveMarketFollowPostResponse(MarketFollowVM?: MarketFollowVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketFollowVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/MarketFollow/SaveMarketFollow`,
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
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowSaveMarketFollowPost(MarketFollowVM?: MarketFollowVM): __Observable<IResponseDTO> {
    return this.ApiMarketFollowSaveMarketFollowPostResponse(MarketFollowVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowUpdateMarketFollowPutResponse(MarketFollowVM?: MarketFollowVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketFollowVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/MarketFollow/UpdateMarketFollow`,
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
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowUpdateMarketFollowPut(MarketFollowVM?: MarketFollowVM): __Observable<IResponseDTO> {
    return this.ApiMarketFollowUpdateMarketFollowPutResponse(MarketFollowVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiMarketFollowGetAllMarketFollowGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/MarketFollow/GetAllMarketFollow`,
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
  ApiMarketFollowGetAllMarketFollowGet(): __Observable<IResponseDTO> {
    return this.ApiMarketFollowGetAllMarketFollowGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiMarketFollowGetMarketFollowByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/MarketFollow/GetMarketFollowById`,
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
  ApiMarketFollowGetMarketFollowByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiMarketFollowGetMarketFollowByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowRemoveMarketFollowDeleteResponse(MarketFollowVM?: MarketFollowVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketFollowVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/MarketFollow/RemoveMarketFollow`,
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
   * @param MarketFollowVM undefined
   * @return Success
   */
  ApiMarketFollowRemoveMarketFollowDelete(MarketFollowVM?: MarketFollowVM): __Observable<IResponseDTO> {
    return this.ApiMarketFollowRemoveMarketFollowDeleteResponse(MarketFollowVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module MarketFollowService {
}

export { MarketFollowService }

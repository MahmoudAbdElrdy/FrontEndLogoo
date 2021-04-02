/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { MarketVM } from '../models/market-vm';
import { MarketLoginDTO } from '../models/market-login-dto';
import { MarketTokenDTO } from '../models/market-token-dto';
@Injectable({
  providedIn: 'root',
})
class MarketService extends __BaseService {
  static readonly ApiMarketSaveMarketPostPath = '/api/Market/SaveMarket';
  static readonly ApiUploadUploadMarketLogPostPath = '/api/Upload/UploadMarketLog';
  static readonly ApiMarketMarketLoginPostPath = '/api/Market/MarketLogin';
  static readonly ApiMarketUpdateMarketTokenPostPath = '/api/Market/UpdateMarketToken';
  static readonly ApiMarketUpdateMarketPutPath = '/api/Market/UpdateMarket';
  static readonly ApiMarketGetAllMarketGetPath = '/api/Market/GetAllMarket';
  static readonly ApiMarketGetMarketByIdGetPath = '/api/Market/GetMarketById';
  static readonly ApiMarketRemoveMarketDeletePath = '/api/Market/RemoveMarket';
//GetAllMarketContorlPanel
static readonly ApiMarketGetAllMarketContorlPanelGetPath = '/api/Market/GetAllMarketContorlPanel';
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketSaveMarketPostResponse(MarketVM?: MarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Market/SaveMarket`,
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
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketSaveMarketPost(MarketVM?: MarketVM): __Observable<IResponseDTO> {
    return this.ApiMarketSaveMarketPostResponse(MarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  ApiUploadUploadMarketLogPostResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Upload/UploadMarketLog`,
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
  }  ApiUploadUploadMarketLogPost(): __Observable<IResponseDTO> {
    return this.ApiUploadUploadMarketLogPostResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param Market undefined
   * @return Success
   */
  ApiMarketMarketLoginPostResponse(Market?: MarketLoginDTO): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Market;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Market/MarketLogin`,
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
   * @param Market undefined
   * @return Success
   */
  ApiMarketMarketLoginPost(Market?: MarketLoginDTO): __Observable<IResponseDTO> {
    return this.ApiMarketMarketLoginPostResponse(Market).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param Market undefined
   * @return Success
   */
  ApiMarketUpdateMarketTokenPostResponse(Market?: MarketTokenDTO): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Market;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Market/UpdateMarketToken`,
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
   * @param Market undefined
   * @return Success
   */
  ApiMarketUpdateMarketTokenPost(Market?: MarketTokenDTO): __Observable<IResponseDTO> {
    return this.ApiMarketUpdateMarketTokenPostResponse(Market).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketUpdateMarketPutResponse(MarketVM?: MarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Market/UpdateMarket`,
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
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketUpdateMarketPut(MarketVM?: MarketVM): __Observable<IResponseDTO> {
    return this.ApiMarketUpdateMarketPutResponse(MarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiMarketGetAllMarketGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Market/GetAllMarket`,
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
  ApiMarketGetAllMarketGet(): __Observable<IResponseDTO> {
    return this.ApiMarketGetAllMarketGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiMarketGetMarketByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Market/GetMarketById`,
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
  ApiMarketGetMarketByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiMarketGetMarketByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketRemoveMarketDeleteResponse(MarketVM?: MarketVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MarketVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Market/RemoveMarket`,
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
   * @param MarketVM undefined
   * @return Success
   */
  ApiMarketRemoveMarketDelete(MarketVM?: MarketVM): __Observable<IResponseDTO> {
    return this.ApiMarketRemoveMarketDeleteResponse(MarketVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  //
  ApiMarketGetAllMarketContorlPanelGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Market/GetAllMarketContorlPanel`,
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
  ApiMarketGetAllMarketContorlPanelGet(): __Observable<IResponseDTO> {
    return this.ApiMarketGetAllMarketContorlPanelGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module MarketService {
}

export { MarketService }

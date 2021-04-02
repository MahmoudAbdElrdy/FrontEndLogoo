/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { CountryVM } from '../models/country-vm';
@Injectable({
  providedIn: 'root',
})
class CountryService extends __BaseService {
  static readonly ApiCountrySaveCountryPostPath = '/api/Country/SaveCountry';
  static readonly ApiCountryUpdateCountryPutPath = '/api/Country/UpdateCountry';
  static readonly ApiCountryGetAllCountryGetPath = '/api/Country/GetAllCountry';
  static readonly ApiCountryGetCountryByIdGetPath = '/api/Country/GetCountryById';
  static readonly ApiCountryRemoveCountryDeletePath = '/api/Country/RemoveCountry';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountrySaveCountryPostResponse(CountryVM?: CountryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CountryVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Country/SaveCountry`,
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
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountrySaveCountryPost(CountryVM?: CountryVM): __Observable<IResponseDTO> {
    return this.ApiCountrySaveCountryPostResponse(CountryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountryUpdateCountryPutResponse(CountryVM?: CountryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CountryVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Country/UpdateCountry`,
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
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountryUpdateCountryPut(CountryVM?: CountryVM): __Observable<IResponseDTO> {
    return this.ApiCountryUpdateCountryPutResponse(CountryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCountryGetAllCountryGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Country/GetAllCountry`,
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
  ApiCountryGetAllCountryGet(): __Observable<IResponseDTO> {
    return this.ApiCountryGetAllCountryGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiCountryGetCountryByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Country/GetCountryById`,
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
  ApiCountryGetCountryByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiCountryGetCountryByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountryRemoveCountryDeleteResponse(CountryVM?: CountryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CountryVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Country/RemoveCountry`,
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
   * @param CountryVM undefined
   * @return Success
   */
  ApiCountryRemoveCountryDelete(CountryVM?: CountryVM): __Observable<IResponseDTO> {
    return this.ApiCountryRemoveCountryDeleteResponse(CountryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module CountryService {
}

export { CountryService }

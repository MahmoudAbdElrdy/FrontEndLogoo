/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { CityVM } from '../models/city-vm';
@Injectable({
  providedIn: 'root',
})
class CityService extends __BaseService {
  static readonly ApiCitySaveCityPostPath = '/api/City/SaveCity';
  static readonly ApiCityUpdateCityPutPath = '/api/City/UpdateCity';
  static readonly ApiCityGetAllCityGetPath = '/api/City/GetAllCity';
  static readonly ApiCityGetSaudiCityGetPath = '/api/City/GetSaudiCity';
  static readonly ApiCityGetCityByIdGetPath = '/api/City/GetCityById';
  static readonly ApiCityRemoveCityDeletePath = '/api/City/RemoveCity';
  static readonly ApiCityGetAllCitySTPGetPath = '/api/City/GetAllCitySTP';
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CityVM undefined
   * @return Success
   */
  ApiCitySaveCityPostResponse(CityVM?: CityVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CityVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/City/SaveCity`,
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
   * @param CityVM undefined
   * @return Success
   */
  ApiCitySaveCityPost(CityVM?: CityVM): __Observable<IResponseDTO> {
    return this.ApiCitySaveCityPostResponse(CityVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CityVM undefined
   * @return Success
   */
  ApiCityUpdateCityPutResponse(CityVM?: CityVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CityVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/City/UpdateCity`,
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
   * @param CityVM undefined
   * @return Success
   */
  ApiCityUpdateCityPut(CityVM?: CityVM): __Observable<IResponseDTO> {
    return this.ApiCityUpdateCityPutResponse(CityVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCityGetAllCityGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/City/GetAllCity`,
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
  ApiCityGetAllCityGet(): __Observable<IResponseDTO> {
    return this.ApiCityGetAllCityGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCityGetSaudiCityGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/City/GetSaudiCity`,
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
  ApiCityGetSaudiCityGet(): __Observable<IResponseDTO> {
    return this.ApiCityGetSaudiCityGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiCityGetCityByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/City/GetCityById`,
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
  ApiCityGetCityByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiCityGetCityByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CityVM undefined
   * @return Success
   */
  ApiCityRemoveCityDeleteResponse(CityVM?: CityVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CityVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/City/RemoveCity`,
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
   * @param CityVM undefined
   * @return Success
   */
  ApiCityRemoveCityDelete(CityVM?: CityVM): __Observable<IResponseDTO> {
    return this.ApiCityRemoveCityDeleteResponse(CityVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  ApiCityGetAllCitySTPGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/City/GetAllCitySTP`,
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
  ApiCityGetAllCitySTPGet(): __Observable<IResponseDTO> {
    return this.ApiCityGetAllCitySTPGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

}

module CityService {
}

export { CityService }

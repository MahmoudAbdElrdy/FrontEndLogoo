/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { CustomerLoginVM } from '../models/customer-login-vm';
@Injectable({
  providedIn: 'root',
})
class CustomerLoginService extends __BaseService {
  static readonly ApiCustomerLoginSaveCustomerLoginPostPath = '/api/CustomerLogin/SaveCustomerLogin';
  static readonly ApiCustomerLoginUpdateCustomerLoginPutPath = '/api/CustomerLogin/UpdateCustomerLogin';
  static readonly ApiCustomerLoginGetAllCustomerLoginGetPath = '/api/CustomerLogin/GetAllCustomerLogin';
  static readonly ApiCustomerLoginGetCustomerLoginByIdGetPath = '/api/CustomerLogin/GetCustomerLoginById';
  static readonly ApiCustomerLoginNewCustomerLoginGetPath = '/api/CustomerLogin/NewCustomerLogin';
  static readonly ApiCustomerLoginRemoveCustomerLoginDeletePath = '/api/CustomerLogin/RemoveCustomerLogin';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginSaveCustomerLoginPostResponse(CustomerLoginVM?: CustomerLoginVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerLoginVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/CustomerLogin/SaveCustomerLogin`,
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
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginSaveCustomerLoginPost(CustomerLoginVM?: CustomerLoginVM): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginSaveCustomerLoginPostResponse(CustomerLoginVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginUpdateCustomerLoginPutResponse(CustomerLoginVM?: CustomerLoginVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerLoginVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/CustomerLogin/UpdateCustomerLogin`,
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
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginUpdateCustomerLoginPut(CustomerLoginVM?: CustomerLoginVM): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginUpdateCustomerLoginPutResponse(CustomerLoginVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCustomerLoginGetAllCustomerLoginGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/CustomerLogin/GetAllCustomerLogin`,
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
  ApiCustomerLoginGetAllCustomerLoginGet(): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginGetAllCustomerLoginGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiCustomerLoginGetCustomerLoginByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/CustomerLogin/GetCustomerLoginById`,
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
  ApiCustomerLoginGetCustomerLoginByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginGetCustomerLoginByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param customer_id undefined
   * @return Success
   */
  ApiCustomerLoginNewCustomerLoginGetResponse(customerId: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (customerId != null) __params = __params.set('customer_id', customerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/CustomerLogin/NewCustomerLogin`,
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
   * @param customer_id undefined
   * @return Success
   */
  ApiCustomerLoginNewCustomerLoginGet(customerId: string): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginNewCustomerLoginGetResponse(customerId).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginRemoveCustomerLoginDeleteResponse(CustomerLoginVM?: CustomerLoginVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerLoginVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/CustomerLogin/RemoveCustomerLogin`,
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
   * @param CustomerLoginVM undefined
   * @return Success
   */
  ApiCustomerLoginRemoveCustomerLoginDelete(CustomerLoginVM?: CustomerLoginVM): __Observable<IResponseDTO> {
    return this.ApiCustomerLoginRemoveCustomerLoginDeleteResponse(CustomerLoginVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module CustomerLoginService {
}

export { CustomerLoginService }

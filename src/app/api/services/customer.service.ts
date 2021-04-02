/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { CustomerVM } from '../models/customer-vm';
import { CustomerSubscribeDTO } from '../models/customer-subscribe-dto';
import { CustomerTokenDTO } from '../models/customer-token-dto';
@Injectable({
  providedIn: 'root',
})
class CustomerService extends __BaseService {
  static readonly ApiCustomerSaveCustomerPostPath = '/api/Customer/SaveCustomer';
  static readonly ApiCustomerSubscribeCustomerPostPath = '/api/Customer/SubscribeCustomer';
  static readonly ApiCustomerRefreshCustomerTokenPostPath = '/api/Customer/RefreshCustomerToken';
  static readonly ApiCustomerUpdateCustomerPutPath = '/api/Customer/UpdateCustomer';
  static readonly ApiCustomerGetAllCustomerGetPath = '/api/Customer/GetAllCustomer';
  static readonly ApiCustomerGetCustomerByIdGetPath = '/api/Customer/GetCustomerById';
  static readonly ApiCustomerRemoveCustomerDeletePath = '/api/Customer/RemoveCustomer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerSaveCustomerPostResponse(CustomerVM?: CustomerVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Customer/SaveCustomer`,
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
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerSaveCustomerPost(CustomerVM?: CustomerVM): __Observable<IResponseDTO> {
    return this.ApiCustomerSaveCustomerPostResponse(CustomerVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param Customer undefined
   * @return Success
   */
  ApiCustomerSubscribeCustomerPostResponse(Customer?: CustomerSubscribeDTO): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Customer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Customer/SubscribeCustomer`,
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
   * @param Customer undefined
   * @return Success
   */
  ApiCustomerSubscribeCustomerPost(Customer?: CustomerSubscribeDTO): __Observable<IResponseDTO> {
    return this.ApiCustomerSubscribeCustomerPostResponse(Customer).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param Customer undefined
   * @return Success
   */
  ApiCustomerRefreshCustomerTokenPostResponse(Customer?: CustomerTokenDTO): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Customer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Customer/RefreshCustomerToken`,
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
   * @param Customer undefined
   * @return Success
   */
  ApiCustomerRefreshCustomerTokenPost(Customer?: CustomerTokenDTO): __Observable<IResponseDTO> {
    return this.ApiCustomerRefreshCustomerTokenPostResponse(Customer).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerUpdateCustomerPutResponse(CustomerVM?: CustomerVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Customer/UpdateCustomer`,
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
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerUpdateCustomerPut(CustomerVM?: CustomerVM): __Observable<IResponseDTO> {
    return this.ApiCustomerUpdateCustomerPutResponse(CustomerVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCustomerGetAllCustomerGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Customer/GetAllCustomer`,
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
  ApiCustomerGetAllCustomerGet(): __Observable<IResponseDTO> {
    return this.ApiCustomerGetAllCustomerGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiCustomerGetCustomerByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Customer/GetCustomerById`,
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
  ApiCustomerGetCustomerByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiCustomerGetCustomerByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerRemoveCustomerDeleteResponse(CustomerVM?: CustomerVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CustomerVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Customer/RemoveCustomer`,
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
   * @param CustomerVM undefined
   * @return Success
   */
  ApiCustomerRemoveCustomerDelete(CustomerVM?: CustomerVM): __Observable<IResponseDTO> {
    return this.ApiCustomerRemoveCustomerDeleteResponse(CustomerVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module CustomerService {
}

export { CustomerService }

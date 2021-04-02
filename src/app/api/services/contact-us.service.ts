/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { ContactUsVM } from '../models/contact-us-vm';
@Injectable({
  providedIn: 'root',
})
class ContactUsService extends __BaseService {
  static readonly ApiContactUsSaveContactUsPostPath = '/api/ContactUs/SaveContactUs';
  static readonly ApiContactUsUpdateContactUsPutPath = '/api/ContactUs/UpdateContactUs';
  static readonly ApiContactUsGetAllContactUsGetPath = '/api/ContactUs/GetAllContactUs';
  static readonly ApiContactUsGetContactUsByIdGetPath = '/api/ContactUs/GetContactUsById';
  static readonly ApiContactUsRemoveContactUsDeletePath = '/api/ContactUs/RemoveContactUs';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsSaveContactUsPostResponse(ContactUsVM?: ContactUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ContactUs/SaveContactUs`,
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
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsSaveContactUsPost(ContactUsVM?: ContactUsVM): __Observable<IResponseDTO> {
    return this.ApiContactUsSaveContactUsPostResponse(ContactUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsUpdateContactUsPutResponse(ContactUsVM?: ContactUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ContactUs/UpdateContactUs`,
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
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsUpdateContactUsPut(ContactUsVM?: ContactUsVM): __Observable<IResponseDTO> {
    return this.ApiContactUsUpdateContactUsPutResponse(ContactUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiContactUsGetAllContactUsGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ContactUs/GetAllContactUs`,
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
  ApiContactUsGetAllContactUsGet(): __Observable<IResponseDTO> {
    return this.ApiContactUsGetAllContactUsGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiContactUsGetContactUsByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ContactUs/GetContactUsById`,
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
  ApiContactUsGetContactUsByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiContactUsGetContactUsByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsRemoveContactUsDeleteResponse(ContactUsVM?: ContactUsVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ContactUsVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ContactUs/RemoveContactUs`,
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
   * @param ContactUsVM undefined
   * @return Success
   */
  ApiContactUsRemoveContactUsDelete(ContactUsVM?: ContactUsVM): __Observable<IResponseDTO> {
    return this.ApiContactUsRemoveContactUsDeleteResponse(ContactUsVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module ContactUsService {
}

export { ContactUsService }

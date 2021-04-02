/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { AdminUsersVM } from '../models/admin-users-vm';
@Injectable({
  providedIn: 'root',
})
class AdminUsersService extends __BaseService {
  static readonly ApiAdminUsersSaveAdminUsersPostPath = '/api/AdminUsers/SaveAdminUsers';
  static readonly ApiUploadUploadAdminUsersLogPostPath = '/api/Upload/UploadAdminUsersLog';
  static readonly ApiAdminUsersAdminUsersLoginPostPath = '/api/AdminUsers/AdminUsersLogin';
  static readonly ApiAdminUsersUpdateAdminUsersPutPath = '/api/AdminUsers/UpdateAdminUsers';
  static readonly ApiAdminUsersGetAllAdminUsersGetPath = '/api/AdminUsers/GetAllAdminUsers';
  static readonly ApiAdminUsersGetAdminUsersByIdGetPath = '/api/AdminUsers/GetAdminUsersById';
  static readonly ApiAdminUsersRemoveAdminUsersDeletePath = '/api/AdminUsers/RemoveAdminUsers';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersSaveAdminUsersPostResponse(AdminUsersVM?: AdminUsersVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdminUsersVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AdminUsers/SaveAdminUsers`,
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
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersSaveAdminUsersPost(AdminUsersVM?: AdminUsersVM): __Observable<IResponseDTO> {
    return this.ApiAdminUsersSaveAdminUsersPostResponse(AdminUsersVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
  ApiUploadUploadAdminUsersLogPostResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Upload/UploadAdminUsersLog`,
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
  }  ApiUploadUploadAdminUsersLogPost(): __Observable<null> {
    return this.ApiUploadUploadAdminUsersLogPostResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param AdminUsers undefined
   * @return Success
   */
  ApiAdminUsersAdminUsersLoginPostResponse(AdminUsers?: AdminUsersVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdminUsers;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/AdminUsers/AdminUsersLogin`,
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
   * @param AdminUsers undefined
   * @return Success
   */
  ApiAdminUsersAdminUsersLoginPost(AdminUsers?: AdminUsersVM): __Observable<IResponseDTO> {
    return this.ApiAdminUsersAdminUsersLoginPostResponse(AdminUsers).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersUpdateAdminUsersPutResponse(AdminUsersVM?: AdminUsersVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdminUsersVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/AdminUsers/UpdateAdminUsers`,
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
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersUpdateAdminUsersPut(AdminUsersVM?: AdminUsersVM): __Observable<IResponseDTO> {
    return this.ApiAdminUsersUpdateAdminUsersPutResponse(AdminUsersVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiAdminUsersGetAllAdminUsersGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdminUsers/GetAllAdminUsers`,
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
  ApiAdminUsersGetAllAdminUsersGet(): __Observable<IResponseDTO> {
    return this.ApiAdminUsersGetAllAdminUsersGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiAdminUsersGetAdminUsersByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/AdminUsers/GetAdminUsersById`,
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
  ApiAdminUsersGetAdminUsersByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiAdminUsersGetAdminUsersByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersRemoveAdminUsersDeleteResponse(AdminUsersVM?: AdminUsersVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = AdminUsersVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/AdminUsers/RemoveAdminUsers`,
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
   * @param AdminUsersVM undefined
   * @return Success
   */
  ApiAdminUsersRemoveAdminUsersDelete(AdminUsersVM?: AdminUsersVM): __Observable<IResponseDTO> {
    return this.ApiAdminUsersRemoveAdminUsersDeleteResponse(AdminUsersVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }
}

module AdminUsersService {
}

export { AdminUsersService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IResponseDTO } from '../models/iresponse-dto';
import { CategoryVM } from '../models/category-vm';
@Injectable({
  providedIn: 'root',
})
class CategoryService extends __BaseService {
  static readonly ApiCategorySaveCategoryPostPath = '/api/Category/SaveCategory';
  static readonly ApiCategoryUpdateCategoryPutPath = '/api/Category/UpdateCategory';
  static readonly ApiCategoryGetAllCategoryGetPath = '/api/Category/GetAllCategory';
  static readonly ApiCategoryGetCategorysAdsGetPath = '/api/Category/GetCategorysAds';
  static readonly ApiCategoryGetCategoryByIdGetPath = '/api/Category/GetCategoryById';
  static readonly ApiCategoryRemoveCategoryDeletePath = '/api/Category/RemoveCategory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CategoryVM undefined
   * @return Success
   */
  ApiCategorySaveCategoryPostResponse(CategoryVM?: CategoryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CategoryVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Category/SaveCategory`,
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
   * @param CategoryVM undefined
   * @return Success
   */
  ApiCategorySaveCategoryPost(CategoryVM?: CategoryVM): __Observable<IResponseDTO> {
    return this.ApiCategorySaveCategoryPostResponse(CategoryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CategoryVM undefined
   * @return Success
   */
  ApiCategoryUpdateCategoryPutResponse(CategoryVM?: CategoryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CategoryVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Category/UpdateCategory`,
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
   * @param CategoryVM undefined
   * @return Success
   */
  ApiCategoryUpdateCategoryPut(CategoryVM?: CategoryVM): __Observable<IResponseDTO> {
    return this.ApiCategoryUpdateCategoryPutResponse(CategoryVM).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCategoryGetAllCategoryGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Category/GetAllCategory`,
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
  ApiCategoryGetAllCategoryGet(): __Observable<IResponseDTO> {
    return this.ApiCategoryGetAllCategoryGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @return Success
   */
  ApiCategoryGetCategorysAdsGetResponse(): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Category/GetCategorysAds`,
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
  ApiCategoryGetCategorysAdsGet(): __Observable<IResponseDTO> {
    return this.ApiCategoryGetCategorysAdsGetResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiCategoryGetCategoryByIdGetResponse(id?: string): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Category/GetCategoryById`,
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
  ApiCategoryGetCategoryByIdGet(id?: string): __Observable<IResponseDTO> {
    return this.ApiCategoryGetCategoryByIdGetResponse(id).pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

  /**
   * @param CategoryVM undefined
   * @return Success
   */
  ApiCategoryRemoveCategoryDeleteResponse(CategoryVM?: CategoryVM): __Observable<__StrictHttpResponse<IResponseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CategoryVM;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Category/RemoveCategory`,
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
   * @param CategoryVM undefined
   * @return Success
   */
  UploadImage(formData){
 
    return     this.http.post(  this.rootUrl + `/api/Upload/UploadMarketLog`, formData);
     
  }
  ApiCategoryRemoveCategoryDelete(CategoryVM?: CategoryVM): __Observable<IResponseDTO> {
    return this.ApiCategoryRemoveCategoryDeleteResponse(CategoryVM).pipe(
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
        return _r as __StrictHttpResponse<IResponseDTO>;
      })
    );
  }  ApiUploadUploadMarketLogPost(): __Observable<IResponseDTO> {
    return this.ApiUploadUploadMarketLogPostResponse().pipe(
      __map(_r => _r.body as IResponseDTO)
    );
  }

}

module CategoryService {
}

export { CategoryService }

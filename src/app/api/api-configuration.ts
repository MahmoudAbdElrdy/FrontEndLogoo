/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:52023';
//rootUrl: string = 'http://lookandgo-001-site1.dtempurl.com';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}

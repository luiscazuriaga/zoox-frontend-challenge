import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CityResponse, { City } from '../interfaces/cityInterface';
import BaseService from './baseService';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService<City,CityResponse>{
  constructor(
     private httpClientres: HttpClient,
  ) {
    super(httpClientres,"/cidades")
  }
}

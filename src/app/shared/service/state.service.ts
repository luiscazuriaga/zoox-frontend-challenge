import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import StateResponse, { State } from '../interfaces/stateInterface';
import BaseService from './baseService';

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseService<State,StateResponse>{
  constructor(
     private httpClientres: HttpClient,
  ) {
    super(httpClientres,"/estados")
  }
}

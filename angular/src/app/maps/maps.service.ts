import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient) { }
  GetAllSupply()
  {
    return this.http.get(this.baseRoute+"Supply/get-list");
  }
  GetAllDemands()
  {
    return this.http.get(this.baseRoute+"Demand/get-list");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Suplly}from '../model/supply'
import { Demand } from '../model/demand';
@Injectable({
  providedIn: 'root'
})
export class SupplyService {
baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient) { }
  
  
   
  saveSupply(supply:Suplly){
     return  this.http.post(this.baseRoute+"Supply?subItem=newSupply",supply);
   }
 /*  deleteSupply(supply:Suplly){
    return  this.http.post(this.baseRoute+"Supply?subItem=newSupply",supply);
  } */
  GetAllSupply()
  {
    return this.http.get(this.baseRoute+"Supply/get-list");
  }
  GetAllCars(){
    return this.http.get(this.baseRoute+"Car/getAllList");
  }
  GetFilterList(demand:Demand)
  {
    return this.http.post(this.baseRoute+"Supply/get-filter-list",demand);
  }
}

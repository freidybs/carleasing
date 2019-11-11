import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demand } from '../model/demand';



@Injectable({
  providedIn: 'root'
})
export class DemandService {
  getSuppliesLocation(demand:Demand) {
    return this.http.post(this.baseRoute+"Demand/getLocationsSupplies",demand)
  }
baseRoute:string="http://localhost:58516/api/"

  constructor(private http:HttpClient) { }
  saveDemand(demand:Demand){
    return  this.http.post(this.baseRoute+"Demand?subItem=newDemand",demand);
  }
 deleteDemand(demand:Demand){
   return  this.http.post(this.baseRoute+"Demand",demand);
   
 }
 lookForSuggest(demand:Demand)
   {
     return this.http.post(this.baseRoute+"Demand/look-for-suggest",demand);
   }
   GetAllDemands()
   {
     return this.http.get(this.baseRoute+"Demand/get-list");
   }
  
}

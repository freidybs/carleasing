import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demand } from '../model/demand';
import { GlobalService } from '../global/global.service';



@Injectable({
  providedIn: 'root'
})
export class DemandService {
  getSuppliesLocation(demand:Demand) {
    return this.http.post(this.baseRoute+"Demand/getLocationsSupplies",demand)
  }
baseRoute:string="http://localhost:58516/api/"

  constructor(private http:HttpClient ,private globalService:GlobalService) { }
  saveDemand(demand:Demand){
    return  this.http.post(this.baseRoute+"Demand?subItem=newDemand",demand);
  }
 deleteDemand(id:number){
   return  this.http.delete(this.baseRoute+"Demand/"+id);
   
 }
 lookForSuggest(demand:Demand)
   {
     return this.http.post(this.baseRoute+"Demand/look-for-suggest",demand);
   }
   GetAllDemands()
   {
     return this.http.get(this.baseRoute+"Demand/get-list");
   }
userDemands()
{
  return this.http.get(this.baseRoute+"Demand/userDemands",this.globalService.httpOptions)
}
update(demand:Demand)
  {
    return this.http.post(this.baseRoute+"Demand?subItem=updateDemand",demand);
  }
}

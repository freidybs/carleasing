import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Suplly}from '../model/supply'
import { Demand } from '../model/demand';
import { GlobalService } from '../global/global.service';
@Injectable({
  providedIn: 'root'
})
export class SupplyService {
baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient,private globalService:GlobalService) { }
  
  
   
  saveSupply(supply:Suplly){
     return  this.http.post(this.baseRoute+"Supply?subItem=newSupply",supply,this.globalService.httpOptions);
   }
   getSupply(id){
    return  this.http.get(this.baseRoute+"Supply/getSupply/"+id);

   }
  GetAllSupply()
  {
    return this.http.get(this.baseRoute+"Supply/get-list");
  }
  GetAllCars(){
    return this.http.get(this.baseRoute+"Car/getAllList");
  }
  GetFilterList(demand:Demand)
  {
    
    return this.http.post(this.baseRoute+"Supply/get-filter-list",demand,this.globalService.httpOptions);
  }
  saveDeamnd(demand:Demand){
    
    return this.http.post(this.baseRoute+"Supply/saveDeamnd",demand,this.globalService.httpOptions);

  }
  creatTransaction(supplyId,demanedId){
    return this.http.get(this.baseRoute+"Transaction/creatTransaction/"+supplyId+'/'+demanedId);

  }
  userSupplies() {
    return this.http.get(this.baseRoute+"Supply/userSupplies",this.globalService.httpOptions);
  }
  delete(id:number) {
    return this.http.delete(this.baseRoute+"Supply/"+id);
  }
  update(supply:Suplly)
  {
    return this.http.post(this.baseRoute+"Supply?subItem=updateSupply",supply);
  }
  
}

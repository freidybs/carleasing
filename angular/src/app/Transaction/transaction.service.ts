import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Transaction}from '../model/transaction'
import { Demand } from '../model/demand';
import { GlobalService } from '../global/global.service';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient,private globalService:GlobalService) { }
  
  
   
  // saveSupply(supply:Suplly){
  //    return  this.http.post(this.baseRoute+"Supply?subItem=newSupply",supply,this.globalService.httpOptions);
  //  }
 
  // GetAllSupply()
  // {
  //   return this.http.get(this.baseRoute+"Supply/get-list");
  // }
  // GetAllCars(){
  //   return this.http.get(this.baseRoute+"Car/getAllList");
  // }
  // GetFilterList(demand:Demand)
  // {
    
  //   return this.http.post(this.baseRoute+"Supply/get-filter-list",demand,this.globalService.httpOptions);
  // }
  // saveDeamnd(demand:Demand){
    
  //   return this.http.post(this.baseRoute+"Supply/saveDeamnd",demand,this.globalService.httpOptions);

  // }
  // creatTransaction(supplyId,demanedId){
  //   return this.http.get(this.baseRoute+"Transaction/creatTransaction/"+supplyId+'/'+demanedId);

  // }
   userTransaction() {
     return this.http.get(this.baseRoute+"Transaction/userTransaction",this.globalService.httpOptions);
   }
  // delete(id:number) {
  //   return this.http.delete(this.baseRoute+"Supply/"+id);
  // }
  // update(supply:Suplly)
  // {
  //   return this.http.post(this.baseRoute+"Supply?subItem=updateSupply",supply);
  // }
}

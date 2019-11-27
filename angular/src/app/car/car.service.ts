import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from '../model/car'
import { Observable } from 'rxjs';
import { GlobalService } from '../global/global.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {
baseroute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient,private globalService:GlobalService) { 
  }
  saveCar(car:Car){
    
    return this.http.post(this.baseroute+"Car/newCar",car,this.globalService.httpOptions);
  }

  getInsurance(){
    return this.http.get(this.baseroute+"Insurance");
  }

  getCarlist()
  {
    return this.http.get(this.baseroute+"Car/getCarList",this.globalService.httpOptions);
  }
  uploadPhotos(files,id){
    
    return this.http.post(this.baseroute+"Car/uploadPhotos?id="+id, files);


  }

  getCar(id){
    return  this.http.get(this.baseroute+"Car/getCar/"+id);

   }
  delete(carId:number)
  {
    return this.http.delete(this.baseroute+"Car/"+carId);
  }
  update(car:Car)
  {
    return this.http.post(this.baseroute+"Car/update",car);
  }
  getallList()
  {
    return this.http.get(this.baseroute+"Car/getallList");
  }
  // getCar(carId:number)
  // {
  //   return this.http.get(this.baseroute+"Car/getCar",carId);
  // }
}

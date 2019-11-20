import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient) {
   
   }
   uploadPhotos(files,id){
    
    return this.http.post(this.baseRoute+"User/uploadPhotos?id="+id, files);


  };
   save(user:User){
     return  this.http.post(this.baseRoute+"User?subItem=register",user);
   }
   getInsurance(){
     return this.http.get(this.baseRoute+"Insurance");
   }
}

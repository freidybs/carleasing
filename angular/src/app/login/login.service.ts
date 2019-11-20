import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { User } from '../model/user';
import { GlobalService } from '../global/global.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient,private globalService:GlobalService) {
   
   }
   //loginSample(user:User){
    //return  this.http.post(this.baseRoute+"User");
  //}
  login(user:User): any {      
    const body = new HttpParams()          
    .set('grant_type', 'password')          
    .set('username', user.email)    
    .set('password', user.password)    
    return this.http.post('http://localhost:58516/token', body.toString(), {observe: 'response',    
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },    
    });  
  }  
  getCurrentUser(){
return this.http.get(this.baseRoute+"User/GetCurrentUser",this.globalService.httpOptions)
  }
//    login(user:User){
//       return  this.http.post(this.baseRoute+"User?subItem=login",user);
//     }
}

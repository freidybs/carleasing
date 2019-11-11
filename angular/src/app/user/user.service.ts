import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseroute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient,private globalService:GlobalService) { }
  getProfile(){
    return this.http.get(this.baseroute+"User/getProfile",this.globalService.httpOptions);
  } 
  updateDetails(user:User){
    return this.http.post(this.baseroute+"User/updateDetails",user);
 }  

}

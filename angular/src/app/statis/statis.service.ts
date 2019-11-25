import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisService {
  baseRoute:string="http://localhost:58516/api/";
  constructor(private http:HttpClient) { }
  usersCount()
  {
    return this.http.get(this.baseRoute+"User/users");
  }
  transCount()
  {
    return this.http.get(this.baseRoute+"User/trans");
  }
}

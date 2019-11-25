import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global/global.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainC:boolean;
  constructor(private globalService:GlobalService){
    
  }
 
  ngOnInit(): void {
    if(location.href == "http://localhost:4200/main")
      this.mainC=false;
    else
    this.mainC=true;

    var token=localStorage.getItem("token");
    if(token)
      this.globalService.setToken(token);
  }
  title = 'carleasingClient';
  navVisibility:boolean=true;

}

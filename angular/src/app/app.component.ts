import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private globalService:GlobalService){
    
  }
  ngOnInit(): void {
    var token=localStorage.getItem("token");
    if(token)
      this.globalService.setToken(token);
  }
  title = 'carleasingClient';
  navVisibility:boolean=true;

}

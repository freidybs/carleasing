import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/model/demand';
import { DemandService } from '../demand.service';
import { Router } from '@angular/router';
import { Suplly } from 'src/app/model/supply';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.css']
})
export class DemandListComponent implements OnInit {
public demandList:Array<Demand>;
demand:Demand=new Demand();
supplyList:Array<Suplly>;
newD:boolean;
 

  constructor(private demandService:DemandService, private router:Router) { }

  ngOnInit() {
 this.demandService.GetAllDemands().subscribe(
  (res:Array<Demand>)=>{
    this.demandList=res;
  }
 );
  if(localStorage.getItem("userMail")==null)
    this.newD=true;
  else
    this.newD=false;
}

  demandDetails(id)
    {
      return this.router.navigate(['demand-details'], { queryParams: { id: id }});
    }
    
}

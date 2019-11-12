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
 
 
 public dataSource: any;
  columnsToDisplay = [ 'delete','edit','toHour', 'fromHour','toDate' ,'fromDate'];


  constructor(private demandService:DemandService, private router:Router) { }

  ngOnInit() {
 this.demandService.GetAllDemands().subscribe(
  (res:Array<Demand>)=>{
    this.demandList=res;
  }
 );
 this.demandService.userDemands().subscribe(
  (res: Array<Demand>) => {
    this.demandList = res;
    this.dataSource = this.demandList;
    
   /*  this.changeDetectorRefs.detectChanges(); */
  });
  }

  demandDetails()
    {
      return this.router.navigate(['demand-details']);
    }
    delete(id:number)
    {
      this.demandService.deleteDemand(id).subscribe(
        (res)=>
        {
          this.dataSource=this.dataSource.filter(item=>item.demandId!=id);
          alert("ok");
        },
        (err)=>
        {
          alert("err");
        }
      );
    }
    
}

import { Component, OnInit } from '@angular/core';
import { StatisService } from './statis.service';
import { DemandService } from '../demand/demand.service';
import { SupplyService } from '../supply/supply.service';
import { Demand } from '../model/demand';
import { Suplly } from '../model/supply';
import { CarService } from '../car/car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-statis',
  templateUrl: './statis.component.html',
  styleUrls: ['./statis.component.css']
})
export class StatisComponent implements OnInit {
numU:number;
numT:number;
numS:number;
numD:number;
numC:number;
  constructor(private statisService:StatisService ,private demandService:DemandService,private supplyService:SupplyService,private carService:CarService) { }

  ngOnInit() {
    this.statisService.usersCount().subscribe(
      (res:number)=>
    {
      this.numU=res;
    }
    )
    this.statisService.transCount().subscribe(
      (res:number)=>
    {
      this.numT=res;
    }
    )
    this.demandService.GetAllDemands().subscribe(
      (res:Array<Demand>)=>
    {
      this.numD=res.length;
    }
    )
    this.supplyService.GetAllSupply().subscribe(
      (res:Array<Suplly>)=>
      {
        this.numS=res.length;
      }
    )
    this.carService.getallList().subscribe(
      (res:Array<Car>)=>
      {
        this.numC=res.length;
      }
    )
  }

}

import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplyService } from '../supply.service';
import { Suplly } from 'src/app/model/supply';
import { Demand } from 'src/app/model/demand';
import { Car } from 'src/app/model/car';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {
  @Input() data;
public supplyList: Array<Suplly>;
  demand = new Demand();
  supply: Suplly = new Suplly();
  car:Car[];
 

  constructor(private supplyService: SupplyService, private router: Router, private aRouter: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    // this.aRouter.params.subscribe(
    //   (p: Demand) => {
    //     console.log(p);
    //     this.demand = p;
    //   })
    // this.supplyService.GetFilterList(this.demand).subscribe(
    //   (res: Array<Suplly>) => {
    //     this.supplyList = res;
    //     console.log(this.supplyList);
    //   }
    // )
    
       /*  this.changeDetectorRefs.detectChanges(); */
      
if(!this.data)
   { this.supplyService.GetAllSupply().subscribe(
      (res: Array<Suplly>) => {
        this.supplyList = res;
      }
    )}
    else
    this.supplyList=this.data;

    this.supplyService.GetAllCars().subscribe(
      (res: Array<Car>) => {
        this.car = res;
      }
    )
  }
  supplyDetails() {
    return this.router.navigate(['supply-details']);
  }
  searchSupply(details) {
    this.supplyService.GetFilterList(details).subscribe(
      (res: Array<Suplly>) => {
        this.supplyList = res;
      });
  }
  getCar(carNum){
    var x=this.car.find(c=>c.carNum==carNum).picture;
    return x;



  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}

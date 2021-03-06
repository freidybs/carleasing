import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplyService } from '../supply.service';
import { Suplly } from 'src/app/model/supply';
import { Demand } from 'src/app/model/demand';
import { Car } from 'src/app/model/car';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {
  @Input() data;
  @Input() saveDemand;
 supplyList: Array<Suplly>;
  demand = new Demand();
  supply: Suplly = new Suplly();
  car:Car[];
  newS:boolean;
  constructor(private supplyService: SupplyService, private router: Router, private aRouter: ActivatedRoute,private sanitizer:DomSanitizer) { }

  // ngOnChanges(){
  //   this.supplyList=this.data;
  // }
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
    if(localStorage.getItem("userMail")==null)
    this.newS=true;
  else
    this.newS=false;
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
  getCarPicture(carNum){
    var x=this.car.find(c=>c.carNum==carNum);
    if(x!=undefined)
    return x.picture;
    return null;



  }
  getCar(carNum){
    var x=this.car.find(c=>c.carNum==carNum);
    return x;



  }
  
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}


creatTransaction(supplyId){
  if(localStorage.getItem("userMail")==null)
  {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'עליך להתחבר ',
      showConfirmButton: false,
      timer: 1900
    })  
    this.router.navigate(['login']);
  }
  else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'לאחר אישורו הוא יקבל את פרטיך ויצור איתך קשר נשלח מייל לבעל הרכב   ',
      showConfirmButton: false,
      timer: 1900
    }) 
  this.supplyService.creatTransaction(supplyId, this.saveDemand.demanedId).subscribe(res=>{
  debugger
 var demanedId=this.saveDemand?this.saveDemand.demanedId:-1;
  this.supplyService.creatTransaction(supplyId,demanedId ).subscribe(res=>{
  })
}

}

}

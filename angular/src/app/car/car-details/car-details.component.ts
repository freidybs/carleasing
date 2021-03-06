import { Component, OnInit, Input, Inject } from '@angular/core';
import { Car } from '../../../app/model/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { User } from 'src/app/model/user';




@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {
  id: number;
  car: Car=new Car();
  user:User=new User();
  files;
  carId;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    var id=localStorage.getItem("userMail");
    this.user.email=id;
    this.car.owner=this.user.userId;
    console.log(this.car);
    this.route.queryParams
    .subscribe(params => {
      this.carId = params['id'] ;
      if(this.carId)
      this.getCar(this.carId);
    });
  }

  getCar(id){
    this.carService.getCar(id).subscribe((res:Car)=>{
      this.car=res;
    })}

}

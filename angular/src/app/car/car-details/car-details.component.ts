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
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    var id=localStorage.getItem("userMail");
    this.user.email=id;
    this.car.owner=this.user.userId;
    console.log(this.car);

  }

  getCar() {
    this.carService.getById(this.id).subscribe((res) => {
      this.car = res;
    })
  }
  

}

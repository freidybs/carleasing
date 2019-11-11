import { Component, OnInit,ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CarService}from './car.service';
import {Car} from '../model/car';
/* import { google } from '@agm/core/services/google-maps-types'; */

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
 
})
export class CarComponent implements OnInit {
  
  car:Car=new Car();
  insuranceTypes;
 files;
 newFile;
 fileList:FormData[];
  constructor(private CarService:CarService,private changeDetector: ChangeDetectorRef) {   }

  ngOnInit() {
    
    this.CarService.getInsurance().subscribe((res)=>{
      this.insuranceTypes=res;
      this.car.insuranceType=res[0].insuranceId;
      console.log(this.car);
    })
    
  }
  saveCar()
  {
    this.CarService.saveCar(this.car).subscribe(
      (res:number)=>{
        alert("ok");
      
        this.saveImg(res)
       
      },
      (err)=>
      {
        alert("fail");
      },

    );
  }
  
  // addImage(event) {
  //   this.files=event.target.files;

  //  }
  addImage(event) {

    this. fileList = event.target.files;
   
  }

  saveImg(id:number){
    let image1: FormData = new FormData();

    if (this.fileList.length > 0) {
      for (let i = 0; i < this.fileList.length; i++) {
        this.newFile = this.fileList[i];
        image1.append(i.toString(), this.newFile, this.newFile.name);
      }
      this.CarService.uploadPhotos(image1, id).subscribe(() => { })
    }
  }

 
}


 


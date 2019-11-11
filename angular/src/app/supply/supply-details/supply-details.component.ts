import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SupplyService } from '../supply.service';
import { Router } from '@angular/router';
import { Suplly } from 'src/app/model/supply';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/car/car.service';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
/* import {} from '@types/googlemaps'; */
import PlaceResult = google.maps.places.PlaceResult;
@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplyDetailsComponent implements OnInit {
supply:Suplly=new Suplly();
cars:Array<Car>;
public appearance = Appearance;
public zoom: number;
public latitude: number;
public longitude: number;
public selectedAddress: PlaceResult;
selectedMarker;
  constructor(private supplyService:SupplyService,private router:Router,private carService:CarService) { }
  
  ngOnInit() {
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
    this.setCurrentPosition();
    this.carService.getCarlist().subscribe(
      (res:Array<Car>)=>{
        this.cars=res;
       
       
       
        console.log(this.cars);
      }
      )
  }

  saveSupply()
  {console.log(this.supply);
    this.supplyService.saveSupply(this.supply).subscribe( (res)=>{
      
      alert("work");
        },
        (err)=>{
          alert("err");
        }
      );
       
  }
  /* deleteSupply()
  {
    this.supplyService.deleteSupply(this.supply).subscribe( (res)=>{
      alert("work");
        },
        (err)=>{
          alert("err");
        }
      );
        } */
    car()
    {
      this.router.navigate(['car']);
    }  
    private setCurrentPosition() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }
   
    onAutocompleteSelected(result: PlaceResult) {
      console.log('onAutocompleteSelected: ', result);
    }
   
    onLocationSelected(location: Location) {
      this.supply.carLocationy = location.latitude;
      this.supply.carLocationx = location.longitude;
      this.latitude=location.latitude;
      this.longitude=location.longitude;
  
      console.log('onLocationSelected: ',  this.supply.carLocationy,this.supply.carLocationx);
    }
  autoCompleteCallback1(selectedData:any) {
    //do any necessery stuff.
    console.log('sss!!',selectedData);
  } 
  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }   
}

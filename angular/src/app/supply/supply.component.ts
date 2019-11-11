import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SupplyService } from './supply.service';
import {Suplly}from '../model/supply';
import {Router}from '@angular/router';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
/* import {} from '@types/googlemaps'; */
import PlaceResult = google.maps.places.PlaceResult;


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SupplyComponent implements OnInit {
supply:Suplly=new Suplly();
public appearance = Appearance;
public zoom: number;
public latitude: number;
public longitude: number;
public selectedAddress: PlaceResult;
  constructor(private supplyService:SupplyService ,private router:Router) { }

  ngOnInit() {
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
    this.setCurrentPosition();
  }
saveSupply()
{
  this.supplyService.saveSupply(this.supply).subscribe( (res)=>{
    alert("work");
    console.log(this.supply);
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
}

import { Component, OnInit,ViewEncapsulation, Input } from '@angular/core';
import { Suplly } from '../model/supply';
/* import { EventEmitter } from '@angular/core'; */
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
/* import {} from '@types/googlemaps'; */
import PlaceResult = google.maps.places.PlaceResult;
import { DemandService } from '../demand/demand.service';
import { MapsService } from './maps.service';
import { Demand } from '../model/demand';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {
  @Input() data;
  public appearance = Appearance;
  public zoom: number;
  public icon:string;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
selectedMarker;
locationsSupply:Array<Suplly>;
locationsDemands:Array<Demand>;

  constructor(private mapsService:MapsService) { }

  ngOnInit() {
    
    this.zoom = 10;
    this.latitude = 32.0799527;
    this.longitude = 34.833524099999977;	
    this.setCurrentPosition();
    if(!this.data)
   {this.mapsService.GetAllSupply().subscribe(
       (res:Array<Suplly>)=>
      {
       this.locationsSupply=res;
        console.log(this.locationsSupply);
      }
    ) }
    else 
    this.locationsSupply=this.data;
    if(window.location.href=="http://localhost:4200/maps")
    {
    this.mapsService.GetAllDemands().subscribe(
      (res:Array<Demand>)=>
     {
      this.locationsDemands=res;
       console.log(this.locationsDemands);
     }
   ) 
  }
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
selectMarker(event) {
  this.selectedMarker = {
    lat: event.latitude,
    lng: event.longitude
  };
}


}

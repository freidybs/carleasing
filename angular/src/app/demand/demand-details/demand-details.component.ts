import { Component, OnInit, Output,ViewEncapsulation } from '@angular/core';
import { Demand } from '../../model/demand';
import { DemandService } from '../demand.service';
import { Car } from 'src/app/model/car';
import { Router, ActivatedRoute } from '@angular/router';
/* import { EventEmitter } from '@angular/core'; */
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
// import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import { Suplly } from 'src/app/model/supply';
import { SupplyListComponent } from 'src/app/supply/supply-list/supply-list.component';
import { SupplyService } from 'src/app/supply/supply.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-demand-details',
  templateUrl: './demand-details.component.html',
  styleUrls: ['./demand-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemandDetailsComponent implements OnInit {
/*   @Output() getCar=new EventEmitter<Car>(); */
  demand: Demand = new Demand();
  car:Car=new Car();
  public appearance = Appearance;
public zoom: number;
public latitude: number;
public longitude: number;
public selectedAddress: PlaceResult;
selectedMarker;
locations:Array<Suplly>;
supply: Suplly = new Suplly();
supplyList: Array<Suplly>;
savedemand:Demand;
id;

  constructor(private demandServic: DemandService, private router: Router,private supplyService:SupplyService , private route: ActivatedRoute) { }
  ngOnInit() {
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
    this.setCurrentPosition();
    
    this.route.queryParams
    .subscribe(params => {
      this.id = params['id'] ;
      if(this.id)
      this.getDemand(this.id);
    });
 

    // this.demandServic.getSuppliesLocation(this.demand).subscribe(
    //   (res:Array<Suplly>)=>
    //   {
    //     this.locations=res;
    //   }
    // )
  }
  // saveDemand() {
  //   this.demandServic.saveDemand(this.demand).subscribe(
  //     (res) => { alert(" o k"); },
  //     (err) => { alert(" "); }
  //   );
  // }
  /* lookForSuggest() {
    this.demandServic.lookForSuggest(this.demand).subscribe(
      (res: any) => {
        /* this.getCar.emit(res)
        this.route.navigate(['car-details']); */
        
       
      /*   console.log(res);
      },
      (err) => {
        alert("not found");
      }
    ); 
  }*/
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  getDemand(id){
    this.demandServic.getDemand(id).subscribe((res:Demand)=>{
      this.demand=res;
    })}
  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }
 
  onLocationSelected(location: Location) {
    this.demand.Locationy = location.latitude;
    this.demand.Locationx = location.longitude;
    this.latitude=location.latitude;
    
    this.longitude=location.longitude;

    console.log('onLocationSelected: ',  this.demand.Locationx,this.demand.Locationy);
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
GetFilterList()
{
  this.router.navigate(['supply-list/',this.demand]);
}
searchSupply(details) {
    this.supplyService.saveDeamnd(details).subscribe(
      (res:Demand) => {
        this.savedemand = res;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'נשמר',
          showConfirmButton: false,
          timer: 1900
        }) 
   this.GetList(details)
      });
}
// searchSupply(details) {
//   this.supplyService.GetFilterList(details).subscribe(
//     (res: Array<Suplly>) => {
//       this.supplyList = res;
//     });
// }


GetList(details){
  this.supplyService.GetFilterList(details).subscribe(
    (res: Array<Suplly>) => {
      this.supplyList = res;
    });
}


}

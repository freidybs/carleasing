import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Demand } from 'src/app/model/demand';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { DemandService } from 'src/app/demand/demand.service';
@Component({
  selector: 'app-supply-search',
  templateUrl: './supply-search.component.html',
  styleUrls: ['./supply-search.component.css']
})
export class SupplySearchComponent implements OnInit {

  @Input() supplySearch: Demand = new Demand();
  @Output() Search: EventEmitter<any> = new EventEmitter<any>();
  constructor(private damandService:DemandService) { }

  ngOnInit() {
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    this.supplySearch.Locationy = location.latitude;
    this.supplySearch.Locationx = location.longitude;
    console.log('onLocationSelected: ', this.supplySearch.Locationx, this.supplySearch.Locationy);
  }
  searchSupply() {
    this.supplySearch.fromDate.setHours(10);
    this.supplySearch.toDate.setHours(10);
    this.supplySearch.fromDate.getDate();
    this.Search.emit(this.supplySearch);
    
    

  }
  // saveDemand() {
  //   this.damandService.saveDemand(this.supplySearch).subscribe(
  //     (res) => { alert(" o k"); },
  //     (err) => { alert(" "); }
  //   );
  // }
  
    
  
}

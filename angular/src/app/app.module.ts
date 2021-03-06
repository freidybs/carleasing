import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule }     from './app-routing.module';
import { DemandDetailsComponent } from './demand/demand-details/demand-details.component';
import { SupplyComponent } from './supply/supply.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatRadioModule,MatButtonModule,MatSelectModule,MatCardModule, MatNativeDateModule} from '@angular/material';
import { DemandListComponent } from './demand/demand-list/demand-list.component';
import { CarComponent } from './car/car.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CarListComponent } from './car/car-list/car-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule,} from '@angular/material/dialog';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { SupplyDetailsComponent } from './supply/supply-details/supply-details.component';
import { SupplyListComponent } from './supply/supply-list/supply-list.component';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MapsComponent } from './maps/maps.component';
import { SupplySearchComponent } from './supply/supply-search/supply-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DemandUListComponent } from './demand/demand-ulist/demand-ulist.component';
import { SupplyUListComponent } from './supply/supply-ulist/supply-ulist.component'; 
import { AppPassworddDirective } from './app-passwordd.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StatisComponent } from './statis/statis.component';
import { TransactionUListComponent } from './transaction/transaction-ulist/transaction-ulist.component'; 

import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    DemandDetailsComponent,
    SupplyComponent,
    DemandListComponent,
    CarComponent,
    CarDetailsComponent,
    MainComponent,
    UserProfileComponent,
    CarListComponent,
    UserDetailsComponent,
    SupplyDetailsComponent,
    SupplyListComponent,
    MapsComponent,
    SupplySearchComponent,
    DemandUListComponent,
    SupplyUListComponent,
    AppPassworddDirective,
      TransactionUListComponent,
      StatisComponent,


  
    

    
 ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
   MatMenuModule,
   MatToolbarModule,
MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxG3TDFOXmRB5XpG9Yfh40VCs5Aqr93jo',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,
    BrowserModule,
MatIconModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

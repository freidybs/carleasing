import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemandDetailsComponent } from './demand/demand-details/demand-details.component';
import { SupplyComponent } from './supply/supply.component';
import { NavComponent } from './nav/nav.component';
import { DemandListComponent } from './demand/demand-list/demand-list.component';
import {CarComponent} from './car/car.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { SupplyDetailsComponent } from './supply/supply-details/supply-details.component';
import { SupplyListComponent } from './supply/supply-list/supply-list.component';
import { MapsComponent } from './maps/maps.component';
import { DemandUListComponent } from './demand/demand-ulist/demand-ulist.component';
import { SupplyUListComponent } from './supply/supply-ulist/supply-ulist.component';
import {TransactionUListComponent } from './transaction/transaction-ulist/transaction-ulist.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile-info', component: UserProfileComponent },
  { path: 'car-details', component: CarDetailsComponent },
  {path:'register',component:RegisterComponent},
  {path:'add-demand',component:DemandDetailsComponent},
  {path:'supply',component:SupplyComponent},
  {path:'demand-list',component:DemandListComponent},
 {path:'demand-details',component:DemandDetailsComponent},
  {path:'car',component:CarComponent},
  {path:'car-list',component:CarListComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path:'supply-details',component:SupplyDetailsComponent},
  {path:'supply-list',component:SupplyListComponent},
  {path:'supply-list/:demand',component:SupplyListComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'demand-ulist',component:DemandUListComponent},
  {path:'supply-ulist',component:SupplyUListComponent},
  {path:'transaction-ulist',component:TransactionUListComponent},
 
  { path: 'maps', component: MapsComponent },
  { path: '', component: LoginComponent }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
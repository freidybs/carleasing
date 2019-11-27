import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { User } from '../model/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  prof:boolean;
user:User=new User();
  constructor(private router:Router,private userService:UserService){ }
  
  ngOnInit() {
    if(localStorage.getItem("userMail")==null)
    this.prof=true;
  else{
    this.prof=false;
    this.userService.getProfile().subscribe(
      (res: any) => {
      this.user = res;
        /* this.dataSource = this.user;
        console.log(this.user); */
      });
  }
}
  demand(){
    this.router.navigate(['demand-list']);

  }

  supply(){
    this.router.navigate(['supply-list']);
  }

  // getLocation(){
  //   navigator.geolocation.getCurrentPosition(this.success);

  // }
  // success(pos) {
  //   var latitude = pos.coords.latitude;
  //   var longitude = pos.coords.longitude;
  //    console.log("Positon:"+latitude +" "+longitude);
  // }
  /* userProfile(){
   
    var userMail=localStorage.getItem("userMail");
if(userMail)
  this.router.navigate(['user-profile']);
else
this.router.navigate(['login']);
  }
  
 
  
}*/
main(){
  this.router.navigate(['statis']);
}
about()
{
  this.router.navigate(['home']);
}
myCars()
{
  return this.router.navigate(['car-list']);
}
myProfile()
{
 return this.router.navigate(['user-details']);
}
mydemands()
{
return this.router.navigate(['demand-ulist']);
}
mySupplies()
{
  return this.router.navigate(['supply-ulist']);
}

myTransactions()
{
  return this.router.navigate(['transaction-ulist']);
}
login()
  {
    return this.router.navigate(['login']);
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit() {
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
  userProfile(){
   
    var userMail=localStorage.getItem("userMail");
if(userMail)
  this.router.navigate(['profile-info']);
else
this.router.navigate(['login']);
  }
  main(){
    this.router.navigate(['main']);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();
  constructor(private registerService:RegisterService,private router:Router) { }
  insuranceTypes;
  
  ngOnInit() {
this.registerService.getInsurance().subscribe((res)=>{
  this.insuranceTypes=res;
  this.user.insuranceType=res[0].insuranceId;
  console.log(this.user);
})
  }

Save(){
this.registerService.save(this.user).subscribe(
  (res)=>{
alert("פרטיך נשמרו בהצלחה");
  },
  (err)=>{
    alert("err");
  }
);
  }
  //register(){
//this.router.navigate(['register']);
  //}
log(){
  console.log(this.user.insuranceType);
}

}

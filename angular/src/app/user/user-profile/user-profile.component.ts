import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
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
}

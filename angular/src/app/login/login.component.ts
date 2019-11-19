import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
  constructor(private loginService:LoginService,private router:Router,private globalService:GlobalService) { }

  ngOnInit() {

  }
  logIn(){
    this.loginService.login(this.user).subscribe(
      (res)=>{
        if (res.status === 200) { 
          localStorage.setItem("userMail",(this.user.email).toString());
          this.globalService.setToken(res.body.access_token);
          this.loginService.getCurrentUser().subscribe((res1:any)=>{
            localStorage.setItem('userImage',res1.picture?res1.picture.toString():"");
          });
        }
    if(res==false)
    {
     alert("you have to register ");
    }
    
      },
      (err)=>{
        alert("err");
      }
    );
      }
      register(){
    this.router.navigate(['register']);
      }


}

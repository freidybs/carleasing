import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
debugger;
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

matcher = new MyErrorStateMatcher();

  constructor(private loginService:LoginService,private router:Router,private globalService:GlobalService) { }
  


  ngOnInit() {

  }

  logIn(){
this.loginService.login(this.user).subscribe(
  (res)=>{
    if (res.status === 200) { 
      localStorage.setItem("userMail",(this.user.email).toString());
      this.globalService.setToken(res.body.access_token);
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


/** Error when invalid control is dirty, touched, or submitted. */


 

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { RegisterService } from 'src/app/register/register.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User = new User();
  dataSource: any;
  insuranceTypes: Array<any>;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private userService: UserService, private registerService: RegisterService) { }
  ngOnInit() {
    this.registerService.getInsurance().subscribe((res: any) => {
      this.insuranceTypes = res;
      this.userService.getProfile().subscribe(
        (res: any) => {
        this.user = res;
          this.dataSource = this.user;
          console.log(this.user);
        });
    })
  }
  //עדכון פרטי משתמש
  updateDetails() {
    this.userService.updateDetails(this.user).subscribe(
      (res) => {
        alert("your changes are saved");
      }

    )
  }
}

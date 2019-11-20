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
  newFile;
  fileList:FormData[];
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
    if(res!=null)
    alert("פרטיך נשמרו בהצלחה");
    this.saveImg(res['userId']);
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
addImage(event) {

  this. fileList = event.target.files;
 
}

saveImg(id:number){
  let image1: FormData = new FormData();

  if (this.fileList.length > 0) {
    for (let i = 0; i < this.fileList.length; i++) {
      this.newFile = this.fileList[i];
      image1.append(i.toString(), this.newFile, this.newFile.name);
    }
    this.registerService.uploadPhotos(image1, id).subscribe((res) => {
      localStorage.setItem('userImage',res.toString());
      debugger
     })
  }
}
}

import { Component, OnInit, Inject, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Car } from 'src/app/model/car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
 /*  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ], */
})
export class CarListComponent implements OnInit {
 public carList: Array<Car>;
 
 public dataSource: any;
  columnsToDisplay = [ 'delete','edit','numSeats', 'model','carCompany' ,'carNum','picture'];



  constructor(private carService: CarService, private router: Router,private sanitizer:DomSanitizer) { }


  ngOnInit() {
    localStorage.getItem("userMail");
    this.carService.getCarlist().subscribe(
      (res: Array<Car>) => {
        this.carList = res;
        this.dataSource = this.carList;
        console.log(this.carList);
       /*  this.changeDetectorRefs.detectChanges(); */
      }
    )

  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
delete(id:number)
{
  this.carService.delete(id).subscribe(
    (res)=>
    {
      this.dataSource=this.dataSource.filter(item=>item.carId!=id);
      alert("ok");
    },
    (err)=>
    {
      alert("err");
    }
  );
}
edit(id)
{
  return this.router.navigate(['car-details'], { queryParams: { id: id }});
}
car()
    {
      this.router.navigate(['car']);
    }  
}
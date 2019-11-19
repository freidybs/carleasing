import { Component, OnInit, Inject, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Car } from 'src/app/model/car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';


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
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'כן,מחק!'
  }).then((result) => {
    if (result.value) {
      this.carService.delete(id).subscribe(
      (res)=>
      {
        Swal.fire(
          'נמחק',
          'בקשתך נמחקה.',
          'success'
        );
        this.dataSource=this.dataSource.filter(item=>item.carId!=id);
      },
      (err)=>
      {
        alert("err");
      }
    );
      
  }
    
  })
}
edit(car:Car)
{
 return this.router.navigate(['car-details']);
 
}
}

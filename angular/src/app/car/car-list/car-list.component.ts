import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Car } from 'src/app/model/car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CarListComponent implements OnInit {
  carList: Array<Car>;

  dataSource: any;
  columnsToDisplay = ['carNum', 'carCompany', 'model', 'numSeats'];



  constructor(private carService: CarService, private router: Router, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }


  ngOnInit() {
    localStorage.getItem("userMail");
    this.carService.getCarlist().subscribe(
      (res: Array<Car>) => {
        this.carList = res;
        this.dataSource = this.carList;
        console.log(this.carList);
        this.changeDetectorRefs.detectChanges();
      }
    )

  }
  /* getDetails()
  {
   this.router.navigate(['car-details']);
  } */
  animal: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(CarDetailsComponent, {
      height: '400px',
      width: '600px',
    });
    /*  dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.animal = result;
     }); */

  }

}
export interface DialogData {
  animal: string;
  name: string;
}
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}






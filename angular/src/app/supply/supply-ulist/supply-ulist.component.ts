import { Component, OnInit } from '@angular/core';
import { Suplly } from 'src/app/model/supply';
import { Router } from '@angular/router';
import { SupplyService } from '../supply.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-supply-ulist',
  templateUrl: './supply-ulist.component.html',
  styleUrls: ['./supply-ulist.component.css']
})
export class SupplyUListComponent implements OnInit {
  public supplyList: Array<Suplly>;
  public dataSource: any;
  columnsToDisplay = [ 'delete','edit','toHour','fromHour', 'toDate','fromDate' ,'carNum'];
  constructor(private supplyService: SupplyService, private router: Router) { }

  ngOnInit() {
    this.supplyService.userSupplies().subscribe(
      (res: Array<Suplly>) => {
        this.supplyList = res;
        this.dataSource = this.supplyList;
        console.log(this.supplyList);
  }
    );
}
delete(id:number)
{

  Swal.fire({
    title: 'את/ה בטוח/ה?',
    text: "את/ה מוחק/ת הצעה!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText:'ביטול',
    confirmButtonText: 'כן, מחק!'
  }).then((result) => {
      if (result.value) {
          this.supplyService.delete(id).subscribe(
              (res) => {
                  this.dataSource = this.dataSource.filter(item => item.supplyId != id);
                  Swal.fire(
                      'נמחק!',
                      '!ההצעה נמחקה בהצלחה.',
                      'success'
                  )
              },
              (err) => {
                  alert("err");
              });
      }
  } );
}
supplyDetails(id)
{
  
 return this.router.navigate(['supply-details'], { queryParams: { id: id }});
 
}




}

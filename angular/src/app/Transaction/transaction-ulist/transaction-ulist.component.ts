import { Component, OnInit } from '@angular/core';
import { Suplly } from 'src/app/model/supply';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-ulist',
  templateUrl: './transaction-ulist.component.html',
  styleUrls: ['./transaction-ulist.component.css']
})
export class TransactionUListComponent implements OnInit {
  public supplyList: Array<Suplly>;
  public dataSource: any;
  columnsToDisplay = ['cost', 'toHour','fromHour', 'toDate','fromDate' ,'carNum'];
  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
     this.transactionService.userTransaction().subscribe(
       (res: Array<Suplly>) => {
         this.supplyList = res;
         debugger
         this.dataSource = this.supplyList;
         console.log(this.supplyList);
   }
     );
}
// delete(id:number)
// {
//   this.supplyService.delete(id).subscribe(
//     (res)=>
//     {
//       this.dataSource=this.dataSource.filter(item=>item.carId!=id);
//       alert("ok");
//     },
//     (err)=>
//     {
//       alert("err");
//     }
//   );
// }
 transctionDetailsDetails(transaction)
 {
  return this.router.navigate(['transction-details']);

 }




}

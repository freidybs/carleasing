import { Component, OnInit } from '@angular/core';
import { Suplly } from 'src/app/model/supply';
import { Router } from '@angular/router';
import { SupplyService } from '../supply.service';

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
  this.supplyService.delete(id).subscribe(
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
supplyDetails(supply:Suplly)
{
 return this.router.navigate(['supply-details']);
 
}




}

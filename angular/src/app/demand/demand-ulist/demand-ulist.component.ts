import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/model/demand';
import { Router } from '@angular/router';
import { DemandService } from '../demand.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-demand-ulist',
  templateUrl: './demand-ulist.component.html',
  styleUrls: ['./demand-ulist.component.css']
})
export class DemandUListComponent implements OnInit {
  public demandList:Array<Demand>;
  public dataSource: any;
  columnsToDisplay = [ 'delete','edit','toHour', 'fromHour','toDate' ,'fromDate'];

  constructor(private demandService:DemandService, private router:Router) { }

  ngOnInit() {
    this.demandService.userDemands().subscribe(
      (res: Array<Demand>) => {
        this.demandList = res;
        this.dataSource = this.demandList;
        
       /*  this.changeDetectorRefs.detectChanges(); */
      });
      
  }
  
  demandDetails()
  {
    return this.router.navigate(['demand-details']);
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
        this.demandService.deleteDemand(id).subscribe(
        (res)=>
        {
          Swal.fire(
            'נמחק',
            'בקשתך נמחקה.',
            'success'
          );
          this.dataSource=this.dataSource.filter(item=>item.demanedId!=id);
        },
        (err)=>
        {
          alert("err");
        }
      );
        
    }
      
    })
  }
}

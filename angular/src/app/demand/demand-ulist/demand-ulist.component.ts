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
  demandDetails(id)
  {
    return this.router.navigate(['demand-details'], { queryParams: { id: id }});
  }
  delete(id:number)
    {
      Swal.fire({
        title: 'את/ה בטוח/ה?',
        text: "את/ה מוחק/ת בקשה!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'ביטול',
        confirmButtonText: 'כן, מחק!'
      }).then((result) => {
        if (result.value) {
          this.demandService.deleteDemand(id).subscribe(
          (res)=>
          {
              this.dataSource=this.dataSource.filter(item=>item.demandId!=id);
          Swal.fire(
            'נמחק!',
            '!הבקשה נמחקה בהצלחה.',
            'success'
          )
          },
          (err)=>
          {
            alert("err");
          });
        }
      });
    }
}

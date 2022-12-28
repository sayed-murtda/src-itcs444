import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.page.html',
  styleUrls: ['./order-report.page.scss'],
})
export class OrderReportPage implements OnInit {
  reports;
  total=0;
  qty=0;
  constructor(public repSrv:ReportService) {
    repSrv.getReports().subscribe((res)=>{
      this.reports=res;
      this.counts();
    })
   }

  ngOnInit() {
  }
  counts(){
    this.reports.forEach(e => {
      console.log(e);
      this.total+=e.total;
      this.qty+=e.items.length;
    });
  }


}

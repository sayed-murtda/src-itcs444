import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Emp, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor(public empServ:EmployeeService,public dataSrv: DataService) { }
  
  ngOnInit() {      
    
  }

  cancel(id,day){
    this.dataSrv.emp.StatusSwitch[day]=-1;
    this.empServ.CancelRequests(this.dataSrv.emp.id, this.dataSrv.emp.StatusSwitch,id)
  }
  accept(from,day,id_req,shift_from,shift_to,to){
    this.empServ.AcceptRequests(from,day,id_req,shift_from,shift_to,to)
  }

  // RejectRequests(from,day,id_req)
  Reject(from,day,id_req){
    this.empServ.RejectRequests(from,day,id_req)
  }

}

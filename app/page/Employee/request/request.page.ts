import { Component, OnInit } from '@angular/core';
import { Emp, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
    
  constructor(public empServ:EmployeeService) { }
  
  ngOnInit() {      
    
  }

}

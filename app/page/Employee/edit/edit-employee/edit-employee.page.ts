import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
  id:any=null;
  empName='';
  empCpr='';
  empJob='';
  empShift='';
  certRadio='';
  
  constructor(public empServ:EmployeeService, public router:Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.queryParamMap.get('index');
    this.empName=this.empServ.Employee[this.id].name;
    this.empCpr=this.empServ.Employee[this.id].cpr;
    this.empJob=this.empServ.Employee[this.id].job;
    this.empShift=this.empServ.Employee[this.id].shift;

  }

  save(){
    this.empServ.Employee[this.id].name=this.empName;
    this.empServ.Employee[this.id].cpr=this.empCpr;
    this.empServ.Employee[this.id].job=this.empJob;
    this.empServ.Employee[this.id].shift=this.empShift;
    alert("Saved Successfully");
  }

  

}

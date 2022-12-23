import { Component, OnInit } from '@angular/core';
import { Emp, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  
  id=this.empServ.Employee.length;
  empName='';
  empCpr='';
  empJob='';
  empShift='';
  certRadio='';
  type='';
  emp:Emp={
    id: "",
    name: "",
    cpr: "",
    job: "",
    shift: "",
    salary:0 ,
    switchShift: []
  }; 

  constructor(public empServ:EmployeeService) { }

  ngOnInit() {
    
  }

  add(){
    this.empServ.addEmployee(this.emp,this.type);
  }

  reset(){
  this.empName='';
  this.empCpr='';
  this.empJob='';
  this.empShift='';
  this.certRadio='';
  }

}

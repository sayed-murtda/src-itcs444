import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  constructor(public empServ:EmployeeService) { }

  ngOnInit() {
    
  }

  add(){
    this.empServ.Employee.push({name:this.empName,id:this.id,cpr:this.empCpr,job:this.empJob,shift:this.empShift,certificate:this.certRadio,switchShift:[]})
    this.id+=1;
    alert("Added Successfully");
    this.reset();
  }

  reset(){
  this.empName='';
  this.empCpr='';
  this.empJob='';
  this.empShift='';
  this.certRadio='';
  }

}

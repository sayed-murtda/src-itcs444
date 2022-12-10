import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  id:number=0;
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
    alert("Added Successfully");
    this.reset();
  }

  reset(){
    this.id=0;
  this.empName='';
  this.empCpr='';
  this.empJob='';
  this.empShift='';
  this.certRadio='';
  }

}

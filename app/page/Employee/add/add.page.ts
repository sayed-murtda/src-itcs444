import { Component, OnInit } from '@angular/core';
import { Emp, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  

  type='';
  emp:Emp={
    id: "",
    name: "",
    cpr: "",
    job: "",
    shift:['6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm'],
    salary:0 ,
    switchShift: []
  }; 

  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor(public empServ:EmployeeService) { }

  ngOnInit() {
    
  }

  add(){
    this.empServ.addEmployee(this.emp,this.type);
    this.reset();
  }

  reset(){
    this.emp={
      id: "",
      name: "",
      cpr: "",
      job: "",
      shift:['6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm'],
      salary:0 ,
      switchShift: []
    }; 
  }

}

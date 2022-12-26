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
    job: "Casher",
    shift:['6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm','6am-2pm'],
    salary:0 ,
    switchShift: [],
    StatusSwitch: []
  }; 

  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor(public empServ:EmployeeService) { }

  ngOnInit() {
    
  }

  add(){
    if(this.emp.job=="Casher")
    this.empServ.addEmployee(this.emp,'Casher')
    else{
      this.empServ.addEmployee(this.emp,'employee')
    }
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
      switchShift: [],
      StatusSwitch:[]
    }; 
  }

}

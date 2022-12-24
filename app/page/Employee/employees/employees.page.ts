import { Component, OnInit } from '@angular/core';
import { Emp, EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employees:Emp[]=[];
  constructor(public empServ:EmployeeService) {
    empServ.getEmployees().subscribe((res)=>{
      if(res){
      this.employees=res;

    }
    })
   }


  ngOnInit() {
    
  }

  delete(id){
    this.empServ.deleteEmployee(id).then(()=> alert('done'))
    .catch(()=> alert('errer'))
  }

}

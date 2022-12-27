import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EmployeeService, switchShift } from '../employee.service';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-switch-shift',
  templateUrl: './switch-shift.page.html',
  styleUrls: ['./switch-shift.page.scss'],
})
export class SwitchShiftPage implements OnInit {
  user=0;
  day;
  switchShift:switchShift= {
    id_form: "",
    shift_from: "",
    id_to: "",
    shift_to: "",
    day: "",
    status: 0,
  }
  constructor(public empServ:EmployeeService,public dataSrv:DataService,private alertController: AlertController) { }

  ngOnInit() {
  }


  showAvailable(ckeckedValue:string,i){
    alert('6am-2pm')
  }
  showAvailable1(i){
    if(i==0)
    alert('2pm-10pm');
  }
  showAvailable2(i){
    alert('4pm-12pm');
  }
  showAvailable3(i){
    alert('Holiday');
  }

  Shift(to,day,shift){
  if(this.dataSrv.emp.StatusSwitch[day]!=0){
      this.switchShift={
        id_form: this.dataSrv.emp.id,
        shift_from: this.dataSrv.emp.shift[day],
        id_to: to,
        shift_to: shift,
        day: day,
        status: 0 ,
      }
      this.dataSrv.emp.StatusSwitch[day]=0;
      this.empServ.switchShift(this.switchShift,this.dataSrv.emp.StatusSwitch);
  }else{
      this.dataSrv.MassegeBox('You have already sent a change request for the same day and it is still pending')
    }

  }
}

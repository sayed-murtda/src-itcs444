import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';
import { DataService } from '../../../data.service';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-switch-shift',
  templateUrl: './switch-shift.page.html',
  styleUrls: ['./switch-shift.page.scss'],
})
export class SwitchShiftPage implements OnInit {
  user=0;

  constructor(public empServ:EmployeeService,public dataSrv:DataService,private alertController: AlertController) { }

  ngOnInit() {
  }

  async switchShift(i:number){

    // this.empServ.Employee[i].switchShift.push(this.user);
    // const alert = await this.alertController.create({
    //   subHeader: 'Request Successfull',
    //   message: 'Your switch request has been send to '+this.empServ.Employee[i].name+' Successfully!',
    //   buttons: ['OK'],
    // });
    // await alert.present();
    // this.empServ.Employee[i].switchShift.forEach(element => {
    //   console.log(element);  
    // });

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
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-switch-shift',
  templateUrl: './switch-shift.page.html',
  styleUrls: ['./switch-shift.page.scss'],
})
export class SwitchShiftPage implements OnInit {
  user=0;

  constructor(public empServ:EmployeeService,private alertController: AlertController) { }

  ngOnInit() {
  }

  async switchShift(i:number){
    this.empServ.Employee[i].switchShift.push(this.user);
    const alert = await this.alertController.create({
      subHeader: 'Request Successfull',
      message: 'Your switch request has been send to '+this.empServ.Employee[i].name+' Successfully!',
      buttons: ['OK'],
    });


    await alert.present();
    this.empServ.Employee[i].switchShift.forEach(element => {
      console.log(element);  
    });
    
  }
}

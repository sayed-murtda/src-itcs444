import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  constructor(public empServ:EmployeeService, public alertController:AlertController) { }

  ngOnInit() {
  }

  async delete(i:number){
    const alert = await this.alertController.create({
      header: 'Are you sure You want to delete '+this.empServ.Employee[i].name+'?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          role: 'confirm'
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    let roleMessage = `${role}`;
    if(roleMessage == 'confirm'){
      this.empServ.Employee.splice(i,i+1);
    }
  }
}

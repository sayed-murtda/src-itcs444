import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  disaply=false;
  public appPages = [
    { title: 'Casher', content: [{ title: 'Casher', url: '/casher'} ]},
    { title: 'Items', content: [{ title: 'Show', url: '/items' },{ title: 'edit', url: '/item/edit' },{ title: 'Remove', url: '' } ]},
    { title: 'Employees', content: [{ title: 'switchShift', url: '/switch-shift' },{title:'request', url: '/request'} ]},
    { title: 'Management', content: [{ title: 'ShowEmployee', url: '/employees' },{ title: 'addEmployee', url: '/add' },{ title: 'addsuppliers', url: '/add-sup' },{ title: 'addEmployee', url: '/add' },{ title: 'Request Supplier', url: 'suppliers/request' }, ]},
    { title: 'suppliers', content: [{ title: 'Add-items', url: 'suppliers/add' },{ title: 'Show items', url: 'sup-items' },{ title: 'Show Suppliers', url: 'suppliers/show-sup' },{ title: 'Show-Requests', url: 'show-request' }]},
    { title: 'Reports', content: [{ title: 'Orders', url: 'order-report' }]},
  ]; 
  darkMode=false;
  moon='moon-outline';
  constructor(public dataSrv:DataService) {
    document.body.setAttribute('color-theme','light');
  }

  dark(){
    this.darkMode=!this.darkMode;
    if(this.darkMode){
      document.body.setAttribute('color-theme','dark');
      this.moon='moon';

    }else{
      document.body.setAttribute('color-theme','light');
      this.moon='moon-outline';

    }
  }
  onClick(){
    this.disaply=!this.disaply;
  }
}

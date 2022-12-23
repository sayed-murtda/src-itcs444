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
    { title: 'Chasher', content: [{ title: 'Chasher', url: '/items'} ]},
    { title: 'Items', content: [{ title: 'Show', url: '/items' },{ title: 'edit', url: '/item/edit' },{ title: 'Remove', url: '' } ]},
    { title: 'Employees', content: [{ title: 'switchShift', url: '/switch-shift' },{title:'request', url: '/request'} ]},
    { title: 'Employees-Management', content: [{ title: 'Show', url: '/employees' },{ title: 'edit', url: '/edit-employee' },{ title: 'add', url: '/add' },{ title: 'delete', url: '/delete' },{ title: 'switchShift', url: '/switch-shift' },{title:'request', url: '/request'} ]},
    { title: 'suppliers', content: [{ title: 'Add', url: 'suppliers/add' },{ title: 'Request', url: 'suppliers/request' },{ title: 'Show Suppliers', url: 'suppliers/show-sup' }]},
    { title: 'Reports', content: [{ title: 'Show', url: '' }]},
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

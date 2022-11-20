import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  disaply=false;
  public appPages = [
    { title: 'Items', content: [{ title: 'Show', url: '/' },{ title: 'edit', url: '/item/edit' },{ title: 'Remove', url: '' } ]},
    { title: 'Employees', content: [{ title: 'Show', url: '' },{ title: 'Add', url: '' },{ title: 'Remove', url: '' } ]},
    { title: 'Suppliers', content: [{ title: 'Show', url: '' },{ title: 'Add', url: '' }]},
    { title: 'Reports', content: [{ title: 'Show', url: '' }]},
  ];
  darkMode=false;
  moon='moon-outline';
  constructor() {}

  dark(){
    this.darkMode=!this.darkMode;
    if(this.darkMode){
      document.body.setAttribute('color-theme','dark');
      this.moon='moon';

    }else{
      document.body.setAttribute('color-theme','ligth');
      this.moon='moon-outline';

    }
  }

  onClick(){
    this.disaply=!this.disaply;
  }
}

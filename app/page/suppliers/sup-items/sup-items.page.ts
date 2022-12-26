import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { SupServiceService } from '../sup-service.service';

@Component({
  selector: 'app-sup-items',
  templateUrl: './sup-items.page.html',
  styleUrls: ['./sup-items.page.scss'],
})
export class SupItemsPage implements OnInit {

  constructor(public dataSrv:DataService,public SupServ:SupServiceService) { }

  ngOnInit() {
  }

  delet(i){
  let id=this.dataSrv.supplier.id;
  this.dataSrv.supplier.items.splice(i, 1);
  this.SupServ.deletItem(id,this.dataSrv.supplier.items);
  this.dataSrv.MassegeBox('Successful Deleted');
  }



}

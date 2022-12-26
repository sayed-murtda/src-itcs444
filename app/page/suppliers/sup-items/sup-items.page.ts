import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-sup-items',
  templateUrl: './sup-items.page.html',
  styleUrls: ['./sup-items.page.scss'],
})
export class SupItemsPage implements OnInit {

  constructor(public dataSrv:DataService) { }

  ngOnInit() {
  }

}

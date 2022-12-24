import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  week=['Sanday','Moday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor(public dataSrv:DataService) { }

  ngOnInit() {
  }

}

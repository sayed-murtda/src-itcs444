import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-show-sup',
  templateUrl: './show-sup.page.html',
  styleUrls: ['./show-sup.page.scss'],
})
export class ShowSupPage implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.scss'],
})
export class HeaderpageComponent implements OnInit {
  @Input() title:string='';
  constructor() { }

  ngOnInit() {}

}

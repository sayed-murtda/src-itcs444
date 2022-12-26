import { Component, OnInit } from '@angular/core';
import { supplier, SupServiceService } from '../sup-service.service';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.page.html',
  styleUrls: ['./show-request.page.scss'],
})
export class ShowRequestPage implements OnInit {

  constructor(private data: SupServiceService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { supplier, SupServiceService } from '../sup-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private data: SupServiceService) {}
  

  ngOnInit() {
  }

  supplier_ID: any;
  supplier: any;

  display_sup_items(){
    this.data.getSupplier(this.supplier_ID).subscribe(item => {
      this.supplier = item.data();
    }) 
  }




}

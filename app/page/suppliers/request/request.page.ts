import { Component, OnInit } from '@angular/core';
import { supplier, SupServiceService } from '../sup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private data: SupServiceService, public router: Router) {}
  

  ngOnInit() {
  }

  supplier_ID: any;
  supplier: any;
  open:boolean[]=[]
  display_sup_items(){
    this.data.getSupplier(this.supplier_ID).subscribe(item => {
      this.supplier = item.data();
    }) 
  }


  subQty(i){
    if(this.supplier.items[i].qty_Requests != 0)
    this.supplier.items[i].qty_Requests--;
    
  }

  addQty(i){
    this.supplier.items[i].qty_Requests++;
  }


  Opeeen(i){
    this.open[i]=!this.open[i];
  }

  request(){
    console.log(this.supplier.items);
    this.data.item_request = this.supplier.items; // add requested items
    this.router.navigateByUrl('/show-request');


  }


}

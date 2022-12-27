import { Component, OnInit } from '@angular/core';
import {item, supplier, SupServiceService } from '../sup-service.service';
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
    console.log(this.supplier.items[0]);
    let name = this.supplier.items[0].supplier;
    let array: any[]=[];
    let total = 0;
    let counter = 0;
    console.log(this.supplier.items);
    this.data.item_request = this.supplier.items; // add requested items
    for(var i=0; i<this.data.item_request.length; i++){
      if(this.data.item_request[i].qty_Requests !=0){
        counter++;

        if(this.data.item_request[i].qty_Requests){
          array.push(this.data.item_request[i]);
          total +=this.data.item_request[i].supplyPrice * this.data.item_request[i].qty_Requests;
        }
        
        
      }
    }
    if(counter !=0)
    this.data.add_Request({supplier_name: name  ,total: total, items: array});

    this.router.navigateByUrl('/show-request');


  }


}

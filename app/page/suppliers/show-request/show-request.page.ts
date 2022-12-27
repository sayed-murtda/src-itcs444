import { Component, OnInit } from '@angular/core';
import { supplier, SupServiceService } from '../sup-service.service';
import{DataService} from '../../../data.service';
@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.page.html',
  styleUrls: ['./show-request.page.scss'],
})
export class ShowRequestPage implements OnInit {

  constructor(private data: SupServiceService, public dataSrv: DataService) { 
    this.display_req_items();

  }

  ngOnInit() {
    
  }

  show_Req: any[] = [];

  open:boolean[]=[];

  requests: any[] = [];

  display_req_items(){
    this.data.get_requested_items().subscribe(item => {
      this.requests = item;
      console.log(this.requests);
    }) 
  }


  Opeeen(i){
    this.open[i]=!this.open[i];
    console.log(this.requests[0].items);
  }




  // show(){
    
  //   for(var i=0; i<this.data.item_request.length; i++){
  //     if(this.data.item_request[i].qty_Requests !=0){
  //       let temp = this.data.item_request[i].qty_Requests;
  //       this.show_Req.push(
  //                           {
  //                             categories:  this.data.item_request[i].categories, 
  //                             description:  this.data.item_request[i].description,
  //                             image:  this.data.item_request[i].image,
  //                             name:  this.data.item_request[i].name,
  //                             price:  this.data.item_request[i].price, 
  //                             qtyPerCarton:  this.data.item_request[i].qtyPerCarton,
  //                             qty_Requests:  this.data.item_request[i].qty_Requests,         
  //                             supplyPrice:  this.data.item_request[i].supplyPrice,
  //                           }
  //                         );
        
  //     }
  //   }
    
  // }

  request(){

  }



}

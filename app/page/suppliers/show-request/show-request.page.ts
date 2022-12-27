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
      
    }) 
  }


  Opeeen(i){
    this.open[i]=!this.open[i];
    // console.log(this.requests[0].items);
  }



accepted_items;

  accept(items , id, requests){ 
    
    items.forEach(item => {
      item.price = (item.supplyPrice / item.qtyPerCarton *1.5).toFixed(2);
      item.qty = item.qtyPerCarton * item.qty_Requests;
      item.Sell_qty = 0;
      console.log(item);
      this.data.add_accepted_item_req(item)
    })

    // this.data.send_report(requests);
    this.data.delete_requested_item(id)
    this.dataSrv.MassegeBox('Request Accepted');
  }

delete(id){
  this.data.delete_requested_item(id)
  this.dataSrv.MassegeBox('Request rejected');
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { SupServiceService } from '../sup-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  
   item:any={
    name: "",
    categories:"",
    description: "",
    qtyPerCarton: "",
    price: "",
    supplyPrice: "",
    image: "",
    supplier:"",
    qty_Requests:0
  }

  constructor(public ActRouter:ActivatedRoute , public data:DataService,public SupSrv: SupServiceService) { }

  ngOnInit() {
  }

  AddItems(){
    let id=this.data.supplier.id;
    let items=this.data.supplier.items;
    this.item.supplier=this.data.supplier.name;
    items.push(this.item);
    this.SupSrv.additem(id,items);
  }

   

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, itm } from '../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  items:any={
    id: '',
    name: '',
    categories:'',
    description: '',
    qtyPerCarton: 0,
    price: 0,
    supplyPrice: 0,
    image: '',
    qty_Requests:0,
    Supplier:'',
  }

  constructor(public itemSrv:ItemService,public router:Router, public activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    console.log();
    this.itemSrv.getItems().subscribe((res)=>{
      let id=this.activatedRoute.snapshot.queryParamMap.get('index');
      if(id)
        this.items=res[id];
      console.log(res);
      
    })
    // let id=this.activatedRoute.snapshot.queryParamMap.get('index');
    // console.log(id);
    // if(id)
    // this.items=this.itemSrv.Items[id];
  }

  Save(){
    console.log(this.items);
    this.itemSrv.updateItem(this.items);
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-casher',
  templateUrl: './casher.page.html',
  styleUrls: ['./casher.page.scss'],
})
export class CasherPage implements OnInit {

  constructor(public data: ItemService) {

    this.show_items();
    
   }

  ngOnInit() {
  }

items: any[] = [];


  show_items(){
    this.data.getItems().subscribe(item =>{
      this.items = item;
    })
  }


  open:boolean[]=[]
  Opeeen(i){}

  subQty(i){
    if(this.items[i].Sell_qty != 0)
    this.items[i].Sell_qty--;
  }

  addQty(i){
    if(this.items[i].Sell_qty < this.items[i].qty)
    this.items[i].Sell_qty++;
  }

  add_to_bascket(item){
    
  }

}

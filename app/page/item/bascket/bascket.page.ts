import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.page.html',
  styleUrls: ['./bascket.page.scss'],
})
export class BascketPage implements OnInit {

  constructor(public data: ItemService) { }

  ngOnInit() {
  }

  sell(){
    this.data.basket_list.forEach(item => {
      item.qty -=item.Sell_qty;
      item.Sell_qty = 0;
      this.data.updateItem(item); 
    });
    this.data.basket_list.length = 0;
    this.data.basket_total_price = 0;
  }
}

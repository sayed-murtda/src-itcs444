import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../data.service';
@Component({
  selector: 'app-casher',
  templateUrl: './casher.page.html',
  styleUrls: ['./casher.page.scss'],
})
export class CasherPage implements OnInit {

  constructor(public data: ItemService, public router: Router,public dataSrv:DataService ) {

    data.getItems().subscribe((res)=>{
      if(res){
      this.items=res;
      this.dataSrv.FilteredList = this.items;
      }
    })

    this.show_items();
    
   }

  ngOnInit() {
  }

items: any[] = [];
searchItem = "";


Search(){
  this.dataSrv.FilteredList= this.items.filter((item)=>{
    return (item.name.toLowerCase().indexOf(this.searchItem.toLowerCase())!=-1)
  })
}

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

  add_to_bascket(i , item){
    let temp;
    this.data.basket_list.push(item);
    Number(this.data.basket_total_price += Number(item.price) * item.Sell_qty);
    console.log(this.data.basket_list);
    
  }

  go_basket(){

    this.router.navigateByUrl('/bascket');
  }

}

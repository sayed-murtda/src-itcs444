import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { itm, ItemService } from '../item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items:itm[]=[];
  constructor(public data: DataService, public itemSrv:ItemService) {
    this.data.FilteredList = this.data.ListItems;
    itemSrv.getItems().subscribe((res)=>{
      if(res){
      this.items=res;
      }
    })
  }

  searchItem = "";

  Search(){
    this.data.FilteredList= this.data.ListItems.filter((item)=>{
      return (item.name.toLowerCase().indexOf(this.searchItem.toLowerCase())!=-1)
    })
  }
  ngOnInit() {
  }

}

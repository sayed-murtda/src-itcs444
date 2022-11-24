import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(public data: DataService) {
    this.data.FilteredList = this.data.ListItems;
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

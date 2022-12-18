import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public index=-1;
  id=null;
  name:any;
  desc:any;
  price:any;
  itemCar:any;

  constructor(public ActRouter:ActivatedRoute , public data:DataService) { }

  ngOnInit() {
    this.index = Number(this.ActRouter.snapshot.paramMap.get("index"));
  }

  AddItems(){
    this.data.SupplierItemsList[this.index].ItemsForSupplier.push({ID:this.id,Name:this.name,Price:this.price,Description:this.desc,itemsPerCartoon:this.itemCar})
  }

}

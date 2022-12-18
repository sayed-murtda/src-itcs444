import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.page.html',
  styleUrls: ['./show-items.page.scss'],
})
export class ShowItemsPage implements OnInit {
  public index=-1;
  constructor(public ActRouter:ActivatedRoute , public data:DataService) { }

  ngOnInit() {
    this.index = Number(this.ActRouter.snapshot.paramMap.get("index"));
  }

}

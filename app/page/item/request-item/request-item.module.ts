import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestItemPageRoutingModule } from './request-item-routing.module';

import { RequestItemPage } from './request-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestItemPageRoutingModule
  ],
  declarations: [RequestItemPage]
})
export class RequestItemPageModule {}

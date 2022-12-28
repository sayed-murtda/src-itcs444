import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BascketPageRoutingModule } from './bascket-routing.module';

import { BascketPage } from './bascket.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BascketPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BascketPage]
})
export class BascketPageModule {}

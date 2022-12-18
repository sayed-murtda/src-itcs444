import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSupPageRoutingModule } from './show-sup-routing.module';

import { ShowSupPage } from './show-sup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSupPageRoutingModule
  ],
  declarations: [ShowSupPage]
})
export class ShowSupPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSupPageRoutingModule } from './add-sup-routing.module';

import { AddSupPage } from './add-sup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSupPageRoutingModule
  ],
  declarations: [AddSupPage]
})
export class AddSupPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSupPageRoutingModule } from './add-sup-routing.module';

import { AddSupPage } from './add-sup.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSupPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [AddSupPage]
})
export class AddSupPageModule {}

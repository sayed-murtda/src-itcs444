import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemovePageRoutingModule } from './remove-routing.module';

import { RemovePage } from './remove.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemovePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RemovePage]
})
export class RemovePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../../app/Component/Components.module';

import { IonicModule } from '@ionic/angular';

import { SupItemsPageRoutingModule } from './sup-items-routing.module';

import { SupItemsPage } from './sup-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupItemsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SupItemsPage]
})
export class SupItemsPageModule {}

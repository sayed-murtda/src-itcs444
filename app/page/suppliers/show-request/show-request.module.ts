import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRequestPageRoutingModule } from './show-request-routing.module';

import { ShowRequestPage } from './show-request.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRequestPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ShowRequestPage]
})
export class ShowRequestPageModule {}

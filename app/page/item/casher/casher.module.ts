import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasherPageRoutingModule } from './casher-routing.module';

import { CasherPage } from './casher.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasherPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CasherPage]
})
export class CasherPageModule {}

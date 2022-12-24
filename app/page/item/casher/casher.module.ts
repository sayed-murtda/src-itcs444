import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasherPageRoutingModule } from './casher-routing.module';

import { CasherPage } from './casher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasherPageRoutingModule
  ],
  declarations: [CasherPage]
})
export class CasherPageModule {}

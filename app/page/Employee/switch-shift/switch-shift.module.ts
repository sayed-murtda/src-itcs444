import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchShiftPageRoutingModule } from './switch-shift-routing.module';

import { SwitchShiftPage } from './switch-shift.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchShiftPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SwitchShiftPage]
})
export class SwitchShiftPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmployeePageRoutingModule } from './edit-employee-routing.module';

import { EditEmployeePage } from './edit-employee.page';
import { ComponentsModule } from '../../../../../app/Component/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmployeePageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditEmployeePage]
})
export class EditEmployeePageModule {}

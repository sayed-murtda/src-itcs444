import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { ComponentsModule } from '../../../../app/Component/Components.module';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {

  constructor(public user:UserService) {
   }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchShiftPage } from './switch-shift.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchShiftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchShiftPageRoutingModule {}

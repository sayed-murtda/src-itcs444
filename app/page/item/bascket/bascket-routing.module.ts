import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BascketPage } from './bascket.page';

const routes: Routes = [
  {
    path: '',
    component: BascketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BascketPageRoutingModule {}

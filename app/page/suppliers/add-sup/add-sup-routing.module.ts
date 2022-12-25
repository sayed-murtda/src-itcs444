import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSupPage } from './add-sup.page';

const routes: Routes = [
  {
    path: '',
    component: AddSupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSupPageRoutingModule {}

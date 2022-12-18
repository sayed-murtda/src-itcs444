import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSupPage } from './show-sup.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSupPageRoutingModule {}

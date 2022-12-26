import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupItemsPage } from './sup-items.page';

const routes: Routes = [
  {
    path: '',
    component: SupItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupItemsPageRoutingModule {}

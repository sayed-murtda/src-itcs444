import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestItemPage } from './request-item.page';

const routes: Routes = [
  {
    path: '',
    component: RequestItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestItemPageRoutingModule {}

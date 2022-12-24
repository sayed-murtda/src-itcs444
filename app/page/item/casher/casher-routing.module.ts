import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasherPage } from './casher.page';

const routes: Routes = [
  {
    path: '',
    component: CasherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasherPageRoutingModule {}

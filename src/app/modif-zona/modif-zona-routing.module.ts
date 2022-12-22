import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifZonaPage } from './modif-zona.page';

const routes: Routes = [
  {
    path: '',
    component: ModifZonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifZonaPageRoutingModule {}

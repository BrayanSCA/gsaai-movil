import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesSecunPage } from './actividades-secun.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesSecunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesSecunPageRoutingModule {}

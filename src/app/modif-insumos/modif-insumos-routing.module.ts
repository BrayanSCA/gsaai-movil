import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifInsumosPage } from './modif-insumos.page';

const routes: Routes = [
  {
    path: '',
    component: ModifInsumosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifInsumosPageRoutingModule {}

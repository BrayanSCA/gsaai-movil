import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoInsumosPage } from './tipo-insumos.page';

const routes: Routes = [
  {
    path: '',
    component: TipoInsumosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoInsumosPageRoutingModule {}

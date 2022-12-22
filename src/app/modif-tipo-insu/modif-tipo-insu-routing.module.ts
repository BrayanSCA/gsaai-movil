import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifTipoInsuPage } from './modif-tipo-insu.page';

const routes: Routes = [
  {
    path: '',
    component: ModifTipoInsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifTipoInsuPageRoutingModule {}

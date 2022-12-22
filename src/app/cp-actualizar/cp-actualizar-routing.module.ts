import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpActualizarPage } from './cp-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: CpActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpActualizarPageRoutingModule {}

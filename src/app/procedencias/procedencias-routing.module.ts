import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedenciasPage } from './procedencias.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedenciasPageRoutingModule {}

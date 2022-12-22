import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifProcedenciasPage } from './modif-procedencias.page';

const routes: Routes = [
  {
    path: '',
    component: ModifProcedenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifProcedenciasPageRoutingModule {}

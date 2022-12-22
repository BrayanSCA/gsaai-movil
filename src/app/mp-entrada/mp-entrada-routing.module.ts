import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpEntradaPage } from './mp-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: MpEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpEntradaPageRoutingModule {}

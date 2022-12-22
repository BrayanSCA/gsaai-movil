import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonosEntradaPage } from './abonos-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: AbonosEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonosEntradaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPilaPage } from './historial-pila.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPilaPageRoutingModule {}

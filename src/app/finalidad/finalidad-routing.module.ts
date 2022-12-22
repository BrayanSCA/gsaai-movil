import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalidadPage } from './finalidad.page';

const routes: Routes = [
  {
    path: '',
    component: FinalidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalidadPageRoutingModule {}

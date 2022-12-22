import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MejoradoresPage } from './mejoradores.page';

const routes: Routes = [
  {
    path: '',
    component: MejoradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MejoradoresPageRoutingModule {}

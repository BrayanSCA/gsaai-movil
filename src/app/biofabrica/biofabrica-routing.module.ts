import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiofabricaPage } from './biofabrica.page';

const routes: Routes = [
  {
    path: '',
    component: BiofabricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiofabricaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpNuevoPage } from './cp-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: CpNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpNuevoPageRoutingModule {}

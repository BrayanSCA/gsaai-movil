import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpCombinarPage } from './cp-combinar.page';

const routes: Routes = [
  {
    path: '',
    component: CpCombinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpCombinarPageRoutingModule {}

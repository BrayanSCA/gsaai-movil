import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifFichaPage } from './modif-ficha.page';

const routes: Routes = [
  {
    path: '',
    component: ModifFichaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifFichaPageRoutingModule {}

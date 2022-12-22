import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifMateriasPPage } from './modif-materias-p.page';

const routes: Routes = [
  {
    path: '',
    component: ModifMateriasPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifMateriasPPageRoutingModule {}

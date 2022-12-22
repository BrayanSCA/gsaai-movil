import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifMejoradoresPage } from './modif-mejoradores.page';

const routes: Routes = [
  {
    path: '',
    component: ModifMejoradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifMejoradoresPageRoutingModule {}

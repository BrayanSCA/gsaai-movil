import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifUsuariosPage } from './modif-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ModifUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifUsuariosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifRolesPage } from './modif-roles.page';

const routes: Routes = [
  {
    path: '',
    component: ModifRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifRolesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifActiSecunPage } from './modif-acti-secun.page';

const routes: Routes = [
  {
    path: '',
    component: ModifActiSecunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifActiSecunPageRoutingModule {}

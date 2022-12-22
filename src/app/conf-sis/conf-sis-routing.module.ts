import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfSisPage } from './conf-sis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfSisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfSisPageRoutingModule {}

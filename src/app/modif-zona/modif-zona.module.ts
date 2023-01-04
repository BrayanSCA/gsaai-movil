import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifZonaPageRoutingModule } from './modif-zona-routing.module';

import { ModifZonaPage } from './modif-zona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifZonaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifZonaPage]
})
export class ModifZonaPageModule {}

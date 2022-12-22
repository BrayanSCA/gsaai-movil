import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpNuevoPageRoutingModule } from './cp-nuevo-routing.module';

import { CpNuevoPage } from './cp-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpNuevoPageRoutingModule
  ],
  declarations: [CpNuevoPage]
})
export class CpNuevoPageModule {}

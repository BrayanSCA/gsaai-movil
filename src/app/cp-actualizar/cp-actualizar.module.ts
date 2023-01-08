import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpActualizarPageRoutingModule } from './cp-actualizar-routing.module';

import { CpActualizarPage } from './cp-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpActualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CpActualizarPage]
})
export class CpActualizarPageModule {}

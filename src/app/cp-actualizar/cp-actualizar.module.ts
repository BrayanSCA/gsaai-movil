import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpActualizarPageRoutingModule } from './cp-actualizar-routing.module';

import { CpActualizarPage } from './cp-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpActualizarPageRoutingModule
  ],
  declarations: [CpActualizarPage]
})
export class CpActualizarPageModule {}

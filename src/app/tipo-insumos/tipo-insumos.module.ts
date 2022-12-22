import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoInsumosPageRoutingModule } from './tipo-insumos-routing.module';

import { TipoInsumosPage } from './tipo-insumos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoInsumosPageRoutingModule
  ],
  declarations: [TipoInsumosPage]
})
export class TipoInsumosPageModule {}

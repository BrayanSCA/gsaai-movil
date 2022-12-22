import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInsumosPageRoutingModule } from './lista-insumos-routing.module';

import { ListaInsumosPage } from './lista-insumos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInsumosPageRoutingModule
  ],
  declarations: [ListaInsumosPage]
})
export class ListaInsumosPageModule {}

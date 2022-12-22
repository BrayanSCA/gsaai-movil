import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifInsumosPageRoutingModule } from './modif-insumos-routing.module';

import { ModifInsumosPage } from './modif-insumos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifInsumosPageRoutingModule
  ],
  declarations: [ModifInsumosPage]
})
export class ModifInsumosPageModule {}

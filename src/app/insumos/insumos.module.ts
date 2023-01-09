import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsumosPageRoutingModule } from './insumos-routing.module';

import { InsumosPage } from './insumos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsumosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InsumosPage]
})
export class InsumosPageModule {}

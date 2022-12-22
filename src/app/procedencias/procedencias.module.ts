import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedenciasPageRoutingModule } from './procedencias-routing.module';

import { ProcedenciasPage } from './procedencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedenciasPageRoutingModule
  ],
  declarations: [ProcedenciasPage]
})
export class ProcedenciasPageModule {}

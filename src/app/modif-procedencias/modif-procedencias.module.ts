import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifProcedenciasPageRoutingModule } from './modif-procedencias-routing.module';

import { ModifProcedenciasPage } from './modif-procedencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifProcedenciasPageRoutingModule
  ],
  declarations: [ModifProcedenciasPage]
})
export class ModifProcedenciasPageModule {}

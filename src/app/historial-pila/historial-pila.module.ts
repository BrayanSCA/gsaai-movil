import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPilaPageRoutingModule } from './historial-pila-routing.module';

import { HistorialPilaPage } from './historial-pila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPilaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HistorialPilaPage]
})
export class HistorialPilaPageModule {}

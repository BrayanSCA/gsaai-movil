import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonosSalidaPageRoutingModule } from './abonos-salida-routing.module';

import { AbonosSalidaPage } from './abonos-salida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonosSalidaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AbonosSalidaPage]
})
export class AbonosSalidaPageModule {}

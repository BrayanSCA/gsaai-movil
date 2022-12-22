import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonosEntradaPageRoutingModule } from './abonos-entrada-routing.module';

import { AbonosEntradaPage } from './abonos-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonosEntradaPageRoutingModule
  ],
  declarations: [AbonosEntradaPage]
})
export class AbonosEntradaPageModule {}

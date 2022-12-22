import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpEntradaPageRoutingModule } from './mp-entrada-routing.module';

import { MpEntradaPage } from './mp-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpEntradaPageRoutingModule
  ],
  declarations: [MpEntradaPage]
})
export class MpEntradaPageModule {}

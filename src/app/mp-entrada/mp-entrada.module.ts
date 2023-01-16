import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpEntradaPageRoutingModule } from './mp-entrada-routing.module';

import { MpEntradaPage } from './mp-entrada.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpEntradaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [MpEntradaPage]
})
export class MpEntradaPageModule {}

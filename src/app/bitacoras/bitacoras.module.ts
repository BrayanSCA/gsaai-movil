import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitacorasPageRoutingModule } from './bitacoras-routing.module';

import { BitacorasPage } from './bitacoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitacorasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BitacorasPage]
})
export class BitacorasPageModule {}

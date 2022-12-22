import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalidadPageRoutingModule } from './finalidad-routing.module';

import { FinalidadPage } from './finalidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalidadPageRoutingModule
  ],
  declarations: [FinalidadPage]
})
export class FinalidadPageModule {}

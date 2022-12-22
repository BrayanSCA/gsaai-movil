import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifTipoInsuPageRoutingModule } from './modif-tipo-insu-routing.module';

import { ModifTipoInsuPage } from './modif-tipo-insu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifTipoInsuPageRoutingModule
  ],
  declarations: [ModifTipoInsuPage]
})
export class ModifTipoInsuPageModule {}

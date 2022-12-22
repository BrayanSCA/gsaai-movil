import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesSecunPageRoutingModule } from './actividades-secun-routing.module';

import { ActividadesSecunPage } from './actividades-secun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesSecunPageRoutingModule
  ],
  declarations: [ActividadesSecunPage]
})
export class ActividadesSecunPageModule {}

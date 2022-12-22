import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MejoradoresPageRoutingModule } from './mejoradores-routing.module';

import { MejoradoresPage } from './mejoradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MejoradoresPageRoutingModule
  ],
  declarations: [MejoradoresPage]
})
export class MejoradoresPageModule {}

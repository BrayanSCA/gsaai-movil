import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpCombinarPageRoutingModule } from './cp-combinar-routing.module';

import { CpCombinarPage } from './cp-combinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpCombinarPageRoutingModule
  ],
  declarations: [CpCombinarPage]
})
export class CpCombinarPageModule {}

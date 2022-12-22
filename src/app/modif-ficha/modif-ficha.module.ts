import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifFichaPageRoutingModule } from './modif-ficha-routing.module';

import { ModifFichaPage } from './modif-ficha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifFichaPageRoutingModule
  ],
  declarations: [ModifFichaPage]
})
export class ModifFichaPageModule {}

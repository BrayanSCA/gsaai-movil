import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifMateriasPPageRoutingModule } from './modif-materias-p-routing.module';

import { ModifMateriasPPage } from './modif-materias-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifMateriasPPageRoutingModule
  ],
  declarations: [ModifMateriasPPage]
})
export class ModifMateriasPPageModule {}

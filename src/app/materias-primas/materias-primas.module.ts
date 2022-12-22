import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriasPrimasPageRoutingModule } from './materias-primas-routing.module';

import { MateriasPrimasPage } from './materias-primas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriasPrimasPageRoutingModule
  ],
  declarations: [MateriasPrimasPage]
})
export class MateriasPrimasPageModule {}

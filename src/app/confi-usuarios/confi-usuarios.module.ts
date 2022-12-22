import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiUsuariosPageRoutingModule } from './confi-usuarios-routing.module';

import { ConfiUsuariosPage } from './confi-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConfiUsuariosPageRoutingModule
  ],
  declarations: [ConfiUsuariosPage]
})
export class ConfiUsuariosPageModule {}

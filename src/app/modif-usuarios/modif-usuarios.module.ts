import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifUsuariosPageRoutingModule } from './modif-usuarios-routing.module';

import { ModifUsuariosPage } from './modif-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifUsuariosPageRoutingModule
  ],
  declarations: [ModifUsuariosPage]
})
export class ModifUsuariosPageModule {}

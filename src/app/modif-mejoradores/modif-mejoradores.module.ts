import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifMejoradoresPageRoutingModule } from './modif-mejoradores-routing.module';

import { ModifMejoradoresPage } from './modif-mejoradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifMejoradoresPageRoutingModule
  ],
  declarations: [ModifMejoradoresPage]
})
export class ModifMejoradoresPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifActiSecunPageRoutingModule } from './modif-acti-secun-routing.module';

import { ModifActiSecunPage } from './modif-acti-secun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifActiSecunPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifActiSecunPage]
})
export class ModifActiSecunPageModule {}

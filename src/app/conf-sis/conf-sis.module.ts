import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfSisPageRoutingModule } from './conf-sis-routing.module';

import { ConfSisPage } from './conf-sis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfSisPageRoutingModule
  ],
  declarations: [ConfSisPage]
})
export class ConfSisPageModule {}

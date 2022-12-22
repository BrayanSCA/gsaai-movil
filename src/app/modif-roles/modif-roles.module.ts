import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifRolesPageRoutingModule } from './modif-roles-routing.module';

import { ModifRolesPage } from './modif-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifRolesPageRoutingModule
  ],
  declarations: [ModifRolesPage]
})
export class ModifRolesPageModule {}

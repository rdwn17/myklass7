import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormtugasPageRoutingModule } from './formtugas-routing.module';

import { FormtugasPage } from './formtugas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormtugasPageRoutingModule
  ],
  declarations: [FormtugasPage]
})
export class FormtugasPageModule {}

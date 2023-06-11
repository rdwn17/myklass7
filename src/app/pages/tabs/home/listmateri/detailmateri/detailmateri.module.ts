import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmateriPageRoutingModule } from './detailmateri-routing.module';

import { DetailmateriPage } from './detailmateri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmateriPageRoutingModule
  ],
  declarations: [DetailmateriPage]
})
export class DetailmateriPageModule {}

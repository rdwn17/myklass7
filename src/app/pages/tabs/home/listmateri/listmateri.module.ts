import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmateriPageRoutingModule } from './listmateri-routing.module';

import { ListmateriPage } from './listmateri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmateriPageRoutingModule
  ],
  declarations: [ListmateriPage]
})
export class ListmateriPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmateriPage } from './detailmateri.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmateriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmateriPageRoutingModule {}

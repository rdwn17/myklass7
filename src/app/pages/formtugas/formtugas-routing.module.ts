import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormtugasPage } from './formtugas.page';

const routes: Routes = [
  {
    path: '',
    component: FormtugasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormtugasPageRoutingModule {}

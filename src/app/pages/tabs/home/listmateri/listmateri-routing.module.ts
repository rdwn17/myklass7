import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListmateriPage } from './listmateri.page';

const routes: Routes = [
  {
    path: '',
    component: ListmateriPage
  },
  {
    path: 'detailmateri/:nim',
    loadChildren: () => import('./detailmateri/detailmateri.module').then( m => m.DetailmateriPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmateriPageRoutingModule {}

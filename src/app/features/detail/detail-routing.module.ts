import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './containers/detail/detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: '/tabs/(two:two)'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'posts',
  //   loadChildren: './features/detail/detail.module#DetailModule'
  // },
  {
    path: '',
    loadChildren: './features/index-page/index-page.module#IndexPageModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

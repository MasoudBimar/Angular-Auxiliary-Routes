import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2.component';
import { List2Component } from './list2/list2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home2',
    pathMatch: 'full',
  },
  {
    path: 'home2',
    component: Home2Component,
  },
  {
    path: 'list2',
    component: List2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2RoutingModule {}

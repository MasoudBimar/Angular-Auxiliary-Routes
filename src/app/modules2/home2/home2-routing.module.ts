import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2.component';
import { List2Component } from './list2/list2.component';
import { DashboardComponent } from '../dashboard.component';

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
    path: 'list',
    component: List2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2RoutingModule {}

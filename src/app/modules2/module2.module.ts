import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Auxiliary2Component } from './auxiliary2/auxiliary2.component';

const routes2: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path:'',
    component: DashboardComponent,
    children:[
      {
        path: 'pages',
        loadChildren: () =>
          import('../modules2/home2/home2.module').then((mod) => mod.Home2Module),
      }
    ]
  },
  {
    path:'',
    component: Auxiliary2Component,
    children:[
      {
        path: 'modals',
        loadChildren: () =>
          import('../modules2/auxiliary2/auxiliary2.module').then(
            (mod) => mod.Auxiliary2Module
          ),
      },
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes2)],
})
export class Module2Module {}

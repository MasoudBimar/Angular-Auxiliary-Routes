import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Auxiliary2Component } from './auxiliary2/auxiliary2.component';

const routes: Routes = [
  {
    path: '',
    // component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../treasury-module/home2/home2.module').then(
            (mod) => mod.Home2Module
          ),
      },
      {
        path: '',

        // component: DashboardComponent,
        children: [
          {
            path: '',
            component: Auxiliary2Component,
            // outlet: 'modal',
            loadChildren: () =>
              import('../treasury-module/auxiliary2/auxiliary2.module').then(
                (mod) => mod.Auxiliary2Module
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TreasuryModule {}

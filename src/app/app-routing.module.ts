import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: "profile",
    outlet: 'modal',
    loadChildren: () => import('./modules/auxiliary/auxiliary.module').then(mod => mod.AuxiliaryModule),
  }
];

const routes2: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "treasury"
  },
  {
    path: "treasury",
    // outlet: 'modal',
    loadChildren: () => import('./modules2/module2.module').then(mod => mod.Module2Module),
  },
  // {
  //   path: "home2",
  //   loadChildren: () => import('./modules2/home2/home2.module').then(mod => mod.Home2Module),
  // },
  // {
  //   path: "profile",
  //   outlet: 'modal',
  //   loadChildren: () => import('./modules2/auxiliary2/auxiliary2.module').then(mod => mod.Auxiliary2Module),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

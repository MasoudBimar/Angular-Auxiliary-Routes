import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './treasury-module/dashboard.component';
import { ComponentModuleOneProxyComponent } from './third-approach/component-module-one-proxy/component-module-one-proxy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'profile',
    outlet: 'modal',
    loadChildren: () =>
      import('./modules/auxiliary/auxiliary.module').then(
        (mod) => mod.AuxiliaryModule
      ),
  },
];

const routes2: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'treasury',
  },
  {
    path: 'treasury',
    component: DashboardComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages',
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./treasury-module/treasury.module').then(
            (mod) => mod.TreasuryModule
          ),
      },
      {
        path: 'modals',
        loadChildren: () =>
          import('./treasury-module/treasury.module').then(
            (mod) => mod.TreasuryModule
          ),
      },
    ]
  }
];

// Version with lazy loaded module one in named router outlet
// using proxy ( https://github.com/angular/angular/issues/12842 see response from UnwrittenFun commented on 6 Jan )
// Module two lazy loaded in router outlet
const routes3: Routes = [
  {
    path: 'module-one',
    outlet: 'module-one-outlet',
    component: ComponentModuleOneProxyComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./third-approach/module-one/module-one.module').then(m => m.ModuleOneModule)
      }
    ],
  },
  {
    path: 'module-two',
    loadChildren: () => import('./third-approach/module-two/module-two.module').then(m => m.ModuleTwoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes3, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

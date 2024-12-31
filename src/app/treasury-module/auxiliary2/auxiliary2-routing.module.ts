import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Auxiliary2Component } from './auxiliary2.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'profile',
    pathMatch: 'full'
  },
  {
    path: '',
    outlet: 'modal',
    // component: Auxiliary2Component,
    children: [
      {
        path: 'profile',
        component: EditProfileComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'activity',
        component: ActivityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Auxiliary2RoutingModule {}

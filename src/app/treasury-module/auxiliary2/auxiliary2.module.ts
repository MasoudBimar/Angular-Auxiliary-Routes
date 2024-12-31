import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auxiliary2Component } from './auxiliary2.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { Auxiliary2RoutingModule } from './auxiliary2-routing.module';



@NgModule({
  declarations: [Auxiliary2Component, EditProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    Auxiliary2RoutingModule
  ]
})
export class Auxiliary2Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from './home2.component';
import { List2Component } from './list2/list2.component';
import { Home2RoutingModule } from './home2-routing.module';



@NgModule({
  declarations: [
    Home2Component,
    List2Component
  ],
  imports: [
    CommonModule,
    Home2RoutingModule
  ]
})
export class Home2Module { }

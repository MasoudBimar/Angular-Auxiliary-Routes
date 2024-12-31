import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModuleOneProxyComponent } from './third-approach/component-module-one-proxy/component-module-one-proxy.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModuleOneProxyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

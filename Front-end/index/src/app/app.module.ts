import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VentaComponent } from './venta/venta.component';
import { HomeComponent } from './home/home.component';
import { IngresoStockComponent } from './ingreso-stock/ingreso-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VentaComponent,
    HomeComponent,
    IngresoStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

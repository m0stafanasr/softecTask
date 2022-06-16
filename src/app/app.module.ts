import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductsService } from './services/products.service';

import { OrdersComponent } from './component/orders/orders.component';
import { ProductsComponent } from './component/products/products.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavbarComponent,
    FooterComponent,
    CartComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

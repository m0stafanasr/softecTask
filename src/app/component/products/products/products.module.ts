import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products.component';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const route:Routes=[
  {path:"", component:ProductsComponent}
]

@NgModule({
  declarations: [
    ProductsComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ],
  providers:[ProductsService]
})
export class ProductsModule { }

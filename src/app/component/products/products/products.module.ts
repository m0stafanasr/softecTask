import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products.component';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductPopUpComponent } from '../product-pop-up/product-pop-up.component';
import { ProductComponent } from '../product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

const route:Routes=[
  {path:"", component:ProductsComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductPopUpComponent,
    ProductComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ],
  providers:[ProductsService]
})
export class ProductsModule { }

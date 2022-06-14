import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'products', loadChildren:()=>import('src/app/component/products/products/products.module').then(p=>p.ProductsModule)},
  {path:'orders', loadChildren:()=>import('src/app/component/orders/orders/orders.module').then(o=>o.OrdersModule)},

  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

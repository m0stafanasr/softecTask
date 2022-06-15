import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../orders.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderComponent } from 'src/app/component/orders/order/order.component';
import { OrderDetailsComponent } from '../../order-details/order-details.component';

const routes:Routes=[
  {path:"", component:OrdersComponent},
]

@NgModule({
  declarations: [
    OrderComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    
  ],
  providers:[OrdersService]
})
export class OrdersModule { }

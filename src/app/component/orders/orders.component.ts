import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/viewModels/orders';
import { Subscription } from 'rxjs';
import { OrderCard } from 'src/app/viewModels/order-card';
import {Users} from 'src/app/viewModels/users'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
orders:Order[]=[]
orderCard 
ordersToShow:Order[];
users:Users[]=[]
ordrat:Order[]=[]
orderMap:any[]=[]
user
userName= new BehaviorSubject({})
  constructor(private orderService:OrdersService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {

    this.orderService.returnedOrders();
    this.orderService.returnUsers()

    this.orderService.users.subscribe(u=> u.map(e=>this.users.push(e)));

    this.createCard();
    this.cd.detectChanges();

  }
 
  setLocal(){

    console.log(this.orders,"hol;a")
    let orders = JSON.stringify(this.orders);
    console.log(orders)
    localStorage.setItem('orders', orders);
  }
  

   createCard(){
    debugger
    this.orderService.return.subscribe(m=>{
      m.map( (e)=>{
        this.orderService.returnUser(e.UserId).subscribe(user=>{ this.orderMap.push({
          orderDate: e.OrderDate,
          userName:user.Name,
          noOfProducts:e.Products.length,
          paymentType:e.PaymentType,
          products: e.Products
         // total: this.getTotals(e.Products),
        });
        });
      })
       console.log(this.orderMap)
    debugger
  })
  }


}

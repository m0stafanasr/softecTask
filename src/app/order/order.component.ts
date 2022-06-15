import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Users } from '../viewModels/users';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
@Input() order :any;
orderTotal:number = 0;
userName
  constructor(private orderService:OrdersService) { 
    
  }
  
  ngOnInit(): void {
    debugger
        this.getTotals(this.order.products);
        this.getUser(this.order.UserId);
        console.log(this.order.UserId)
  }

getTotals(products: any[]){
 
    products.map( e=>
      this.orderService.returnPrices(e.ProductId).subscribe( r=>{
        this.orderTotal += e.Quantity * r.ProductPrice;
        
    }))

}

getUser(id:number){
  this.orderService.returnUser(id).subscribe(e=>{this.userName=e.Name})

}
showDetails(){
  
}

}

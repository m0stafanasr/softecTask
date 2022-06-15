import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { OrderDetailsComponent } from '../../order-details/order-details.component';
import { OrdersService } from '../../../services/orders.service';
import { Users } from '../../../viewModels/users';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
@Input() order :any;
orderTotal:number = 0;
user=new BehaviorSubject({});

  constructor(private orderService:OrdersService,private modalService: NgbModal) { 
    
  }
  
  ngOnInit(): void {
        this.getTotals(this.order.products);
        
  this.getUser(this.order.UserId);
  }

getTotals(products: any[]){
 
    products.map( e=>
      this.orderService.returnPrices(e.ProductId).subscribe( r=>{
        this.orderTotal += e.Quantity * r.ProductPrice;
        
    }))

}

getUser(id){
  this.orderService.getUsers()
  this.orderService.returnUser(id).subscribe(e=>{this.user.next(e)});

}

showDetails(){
  const orderDetail = this.modalService.open(OrderDetailsComponent, {centered:true, size: 'xl',});
  orderDetail.componentInstance.order = this.order
  this.user.subscribe(e=>orderDetail.componentInstance.user = e)
}



}

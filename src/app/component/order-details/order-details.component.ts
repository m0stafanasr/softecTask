import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { Products } from 'src/app/viewModels/products';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
user;
order;
selectedUser=new BehaviorSubject({})
products:any[]=[]
  constructor(private orderService:OrdersService, public activeModal: NgbActiveModal) { }
  product = new BehaviorSubject({});
  
  ngOnInit(): void {
  console.log(this.order, this.user)
  let quantity = 0
    this.order.products.map(e=> {this.getProducts(e.ProductId);
                                    quantity = e.Quantity;});
                               
    this.product.subscribe(p=>this.products.push({prod:p, quantity: quantity}));
    this.products.shift()

  }
  getProducts(id){
    this.products.unshift()
    this.orderService.returnPrices(id).subscribe(prod=>this.product.next(prod))
  }
 
  edit(){

      
  }
  
}

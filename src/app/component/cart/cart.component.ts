import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  empyCart:boolean = false
  
  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    console.log(this.products)
    if(this.products){

    }
  }
  empty(){
    let data = localStorage.getItem('cart')
    let parsed = JSON.parse(data)
    this.orderService.cartAmount.next(null);
    localStorage.removeItem('cart')
    let check = localStorage.getItem('cart')
    if(check){
      alert('not deleted')
    }
    console.log(parsed,'sdf')
  }
}

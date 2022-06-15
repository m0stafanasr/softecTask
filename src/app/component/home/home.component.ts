import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { Order } from 'src/app/viewModels/orders';
import { Products } from 'src/app/viewModels/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProducts = new BehaviorSubject<Products[]>([])
  returnedProds = this.allProducts.asObservable();
  products:Products[]=[];
  cart:any[]=[];
  orderId= new BehaviorSubject(0)
  
  constructor(private productService:ProductsService) {
  }
  
  ngOnInit(): void {

    this.productService.getProducts().subscribe(e=>this.products=e);
    let oldCart = localStorage.getItem('cart');
   
    let returnedCart = JSON.parse(oldCart)
     
     if(oldCart){
      returnedCart.map(prods=>this.cart.push(prods));

      localStorage.setItem('cart', JSON.stringify(this.cart))
      this.cart = []
    }
 
  }


  
  add(id){
    console.log(id+ 'added')
    let oldCart = localStorage.getItem('cart');
   
    let returnedCart = JSON.parse(oldCart)
     
     if(oldCart){
      returnedCart.map(prods=>this.cart.push(prods));
    }
    this.cart.push({prodId:id, quantity:1})   
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.cart = []
  }
  edit(){
    
  }
}

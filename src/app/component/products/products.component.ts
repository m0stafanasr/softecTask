import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/viewModels/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts = new BehaviorSubject<any[]>([])
  returnedProds = this.allProducts.asObservable();
  products:any[]=[];
  cart:any[]=[]
  constructor(private productService:ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.getProducts();
   let oldCart = localStorage.getItem('cart');
   
   //this.orderService.cartAmount.next(null);
    let returnedCart = JSON.parse(oldCart)
     
     if(oldCart){
      returnedCart.map(prods=>this.cart.push(prods));

      localStorage.setItem('cart', JSON.stringify(this.cart))
      this.cart = []
    }
  }

  getProducts(){
    this.productService.getProducts().subscribe(e=>this.products=e);

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
    this.orderService.cartAmount.next(this.cart.length);
    this.cart = [];
  }

edit(){
  
}
}

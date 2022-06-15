import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/viewModels/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts = new BehaviorSubject<Products[]>([])
  returnedProds = this.allProducts.asObservable();
  products:Products[]=[];
  cart:any[]=[]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(e=>this.products=e);

  }
  
  add(id){
    console.log(id+ 'added')

    this.cart.push({prodId:id, quantity:1})   
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

edit(){
  
}
}

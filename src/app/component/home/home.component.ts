import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/viewModels/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProducts = new BehaviorSubject<Products[]>([])
  returnedProds = this.allProducts.asObservable();
  products:Products[]=[]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(e=>this.products=e);
  }

  getProducts(){
    this.productService.getProducts().subscribe(e=>this.products=e);
   // this.returnedProds.subscribe(e=>this.products =e)
  }
  
  add(id){
    console.log(id+ 'added')
  }
  edit(){
    
  }
}

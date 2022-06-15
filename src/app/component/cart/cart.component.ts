import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  empyCart:boolean = false
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
    if(this.products){

    }
  }
  empty(){
    localStorage.removeItem('cart')
   let data = localStorage.getItem('cart')
    if(data){
      alert('not deleted')
    }
  
  }
}

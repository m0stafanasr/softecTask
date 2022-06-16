import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';
import {ProductPopUpComponent} from '../product-pop-up/product-pop-up.component'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product
products:any[]=[];
cart:any[]=[]
  constructor(private modalService: NgbModal, private orderService:OrdersService) { }
  ngOnInit(): void {
  }
  add(id){
    console.log(id+ 'added')
    let oldCart = localStorage.getItem('cart');
   
    let returnedCart = JSON.parse(oldCart)
     
     if(oldCart){
      returnedCart.map(prods=>this.cart.push(prods));
    }
    this.cart.push({ProductId:id, Quantity:1})   
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.orderService.cartAmount.next(this.cart.length);
    this.cart = [];
  }

edit(){
  const editPopUp = this.modalService.open(ProductPopUpComponent, {centered:true, size:'xl'});
  editPopUp.componentInstance.product = this.product
}
}

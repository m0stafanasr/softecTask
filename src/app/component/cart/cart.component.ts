import { Component, DoCheck, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgFormsManager } from '@ngneat/forms-manager';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/viewModels/orders';
import { Users } from 'src/app/viewModels/users';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {
  products;
  empyCart:boolean = false
  payment=[]
  prodArr=[]
  returnUsers:Users[]
  newOrder:FormGroup<any>;
  ref:ElementRef
  constructor(private orderService:OrdersService, public activeModal:NgbActiveModal, private fb:FormBuilder,
    private formsManager: NgFormsManager
    ) { 
    this.payment = [
      'Cash',
      'online'
    ]
    
    this.orderService.returnUsers()
    this.orderService.returnUserss.subscribe(e=>this.returnUsers=e)
  }
  dropDown = new BehaviorSubject([])
  total=0

  ngDoCheck(){
        let prices = 0
    this.prodArr.map(e=>prices += e.ProductPrice)
    console.log(prices)
    this.total = prices
  }
  ngOnInit(): void {
    console.log(this.products)
    if(this.products){
      this.products.map(e=>this.orderService.returnPrices(e.ProductId).subscribe(prod=>this.prodArr.push(prod)) );
     
      console.log(this.returnUsers)
      this.initForm();
    }

    this.initForm();
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
    this.activeModal.dismiss('Cross click')
  }
  placeOrder(){
  //  this.orderService.addOrder(this.newOrder)
   let order = JSON.stringify(this.newOrder);
   localStorage.setItem('Orders', order)
   // console.log(this.newOrder.value)
}

  initForm(){
    let id = Math.floor(Math.random()*90000) + 10000
    let date = new Date()
    console.log(date)
  
    this.newOrder = this.fb.group({
      OrderId: [id],
      OrderDate: [date],
      UserId: ['', Validators.required],
      Products: [this.products],
      PaymentType: [""]
    })

  }
}

import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
products:any[]=[]
cartProds:number=0
amount = null
  constructor(private modalService: NgbModal, private cd: ChangeDetectorRef, private orderService:OrdersService) { }

  ngDoCheck(): void {
    this.orderService.cartAmount.subscribe(e=>this.amount = e);
    let local = localStorage.getItem('cart')
    if(!local){
      this.amount = null
    }
  }
  ngOnInit(): void {
  
  }
  openCart(){
   let local = localStorage.getItem('cart');
   this.products = JSON.parse(local);
    const cartDetails = this.modalService.open(CartComponent, {centered:true, size:'xl'});
    cartDetails.componentInstance.products = this.products;
  }
}

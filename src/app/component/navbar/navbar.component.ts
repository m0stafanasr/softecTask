import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
products:any[]=[]
cartProds:number=0;
  constructor(private modalService: NgbModal, private cd: ChangeDetectorRef) { }

  ngDoCheck(): void {

    
    this.cartProds == this.products.length+1;
    this.cd.detectChanges()
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

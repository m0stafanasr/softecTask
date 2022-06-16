import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-product-pop-up',
  templateUrl: './product-pop-up.component.html',
  styleUrls: ['./product-pop-up.component.scss']
})
export class ProductPopUpComponent implements OnInit {
  editForm:FormGroup<any>;
  product;
  submit:boolean=false;
  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
initForm(){
  this.editForm = this.fb.group({
    Name: [this.product.ProductName],
        Price: [this.product.ProductPrice],
        Pieces: [this.product.AvailablePieces]
  })
}

edit(){

this.product.ProductName = this.editForm.value.Name;
this.product.ProductPrice = this.editForm.value.Price;
this.product.AvailablePieces = this.editForm.value.Pieces;

this.activeModal.dismiss('Cross click')
Swal.fire({
  icon: 'success',
  title: 'Product Edited',
  text: 'product Edited successfully',

})
}
}

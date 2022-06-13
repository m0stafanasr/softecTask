import { Injectable } from '@angular/core';
import { Order } from '../viewModels/orders';
import { Products } from '../viewModels/products';
import { Users } from '../viewModels/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  HttpOption;
  productsFile = '../../assets/products.json';
  constructor(private httpClient:HttpClient) {
    this.HttpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
   }
   getProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.productsFile);
  }
}

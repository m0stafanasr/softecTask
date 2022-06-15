import { Injectable } from '@angular/core';
import { Order } from '../viewModels/orders';
import { Users } from '../viewModels/users';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../viewModels/products';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersFile = '../../assets/orders.json';
  usersFile = '../../assets/users.json';
  productsFile = '../../assets/products.json'
  orders;
  users= new BehaviorSubject<Users[]>([]);
  returned = new BehaviorSubject<Order[]>([]);
  return= this.returned.asObservable();
  HttpOption;
  constructor(private httpClient:HttpClient) { 
    this.HttpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
  }

}

getOrders():Observable<Order[]>{
  return this.httpClient.get<Order[]>(this.ordersFile);
}

returnedOrders(){
  this.getOrders().subscribe(e=>this.returned.next(e))
}

getOrder(OrderId):Observable<Order>{
  return this.httpClient.get<Order[]>(this.ordersFile).pipe(map((orders:Order[])=>{
    return orders.find((Order:Order)=>{return Order.OrderId == OrderId})
  }))
}

getUsers():Observable<Users[]>{
  return this.httpClient.get<Users[]>(this.usersFile)
}

returnUsers(){
  this.getUsers().subscribe(e=>this.users.next(e))
}

returnUser(id){
  return this.getUsers().pipe(map(users=>{return users.find(user=>{return user.Id == id})}))
}
returnPrices(id){
  return this.httpClient.get<Products[]>(this.productsFile).pipe(map(products=>{return products.find(prod=>{return prod.ProductId == id})}))
}



}

import { Injectable } from '@angular/core';
import { Order } from '../viewModels/orders';
import { Users } from '../viewModels/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersFile = '../../assets/orders.json';
  usersFile = '../../assets/users.json';
  orders;
  HttpOption;
  constructor(private http:HttpClient) { 
    this.HttpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
  }
}

getOrders():Observable<Order[]>{
  return this.http.get<Order[]>(this.ordersFile);
}

getOrder(OrderId){
  return this.http.get<Order[]>(this.ordersFile).pipe(map((orders:Order[])=>{
    return orders.find((Order:Order)=>{return Order.OrderId == OrderId})
  }))
}

getUsers():Observable<Users[]>{
  return this.http.get<Users[]>(this.usersFile)
}

}

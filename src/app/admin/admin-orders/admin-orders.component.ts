import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit{

  orders : Order[] = [];

  constructor(private orderService : OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }
}

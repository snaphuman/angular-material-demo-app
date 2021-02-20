import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

    @Input() set id(value: number) {
      this.getOrders(value);
  };


  orders: IOrder[];
  customer: ICustomer;
  orderItems: any[];

  displayedColumns: string[] = ['productName', 'itemCost'];

  constructor(private dataService: DataService ) {
    this.orders = [];
  }

  getOrderItems(orders) {
    orders.forEach((order) => {
      this.orderItems = order.orderItems
    })
  }

  getOrders(id) {
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.getOrderItems(orders);
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

  ngOnInit() {}
}

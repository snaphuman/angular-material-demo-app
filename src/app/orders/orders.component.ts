import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[];
  customer: ICustomer;
  orderItems: any[];

  displayedColumns: string[] = ['productName', 'itemCost'];

  constructor(private dataService: DataService,
              private route: ActivatedRoute ) {
    this.orders = [];
  }

  getOrderItems(orders) {
    orders.forEach((order) => {
      this.orderItems = order.orderItems
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.getOrderItems(orders);
    });


    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });


  }

}

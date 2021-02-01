import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import {Sort} from '@angular/material/sort';
import { SorterService } from '../../core/sorter.service';
import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    private _customers: ICustomer[];
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if(value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: ICustomer[];
    customersOrderTotal: number;
    currencyCode: string;

    displayedColumns: string[] = ['id', 'name', 'city', 'orderTotal'];

    constructor(private sorterService: SorterService) {
        this._customers = [];
        this.filteredCustomers = [];
        this.customersOrderTotal = 0;
        this.currencyCode = 'USD'
    }

    ngOnInit() {
    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((customer: ICustomer) => {
            this.customersOrderTotal += customer.orderTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
                return customer.name.toLowerCase().indexOf(data.toLowerCase()) > -1
                    || customer.city.toLowerCase().indexOf(data.toLowerCase()) > -1
                    || customer.orderTotal.toString().indexOf(data.toLowerCase()) > -1
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(sort: Sort) {
        const prop = sort.active;
        const currDir = sort.direction;

        this.filteredCustomers = this.sorterService.sort(this.filteredCustomers, prop, currDir);
    }
}

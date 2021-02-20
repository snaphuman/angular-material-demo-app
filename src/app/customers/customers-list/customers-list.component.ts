import { Component, OnInit, Input, QueryList, ViewChild, ViewChildren, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import {Sort} from '@angular/material/sort';
import { SorterService } from '../../core/sorter.service';
import { ICustomer } from '../../shared/interfaces';
import { SplitAreaDirective, SplitComponent } from 'angular-split';

@Component({
    selector: 'app-customers-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./customers-list.component.sass'],
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements AfterViewInit {

    @ViewChild(SplitComponent) splitEl: SplitComponent
    @ViewChildren(SplitAreaDirective) areasEl: QueryList<SplitAreaDirective>

    ngAfterViewInit() {
      console.log('Area Components: ', this.areasEl);
    }

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

    id: number;
    filteredCustomers: ICustomer[];
    customersOrderTotal: number;
    currencyCode: string;

    displayedColumns: string[] = ['id', 'name', 'city', 'orderTotal'];

    constructor(
        private sorterService: SorterService,
        private router: Router
    ) {
        this._customers = [];
        this.filteredCustomers = [];
        this.customersOrderTotal = 0;
        this.currencyCode = 'USD'
    }

    selectedCustomer(row: any) {
        this.id = row.id;
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

    onClose1(newSize = 0) {
      this.areasEl.first.collapse(newSize)
    }

    onExpand1() {
      this.areasEl.first.expand()
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    filteredCustomers: any[];
    customersOrderTotal: number;
    currencyCode: string;

    constructor() {
        this.filteredCustomers = [];
        this.customersOrderTotal = 0;
        this.currencyCode = 'USD'
    }
    
    ngOnInit() {
    }
}

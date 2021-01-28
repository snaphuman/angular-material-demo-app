import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'assets/';
    }

    getCustomers() : Observable<ICustomer[]> {
        return  this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                map((customers) => {
                    let customer = customers.filter((cust: ICustomer) => cust.id === id);
                    console.log(customer)
                    return (customer && customer.length) ? customer[0] : null;
                }),
                catchError(this.handleError)
            )
    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
            .pipe(
                map(orders => {
                    let custOrders = orders.filter((order: IOrder) => order.customerId === id);
                    return custOrders;
                }),
                catchError(this.handleError)
            )
    }

    private handleError(response: any) {
        console.error('server error:', response);
        if (response.error instanceof Error) {
            const errMessage = response.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(response || 'Node.js server errpr')
    }
}

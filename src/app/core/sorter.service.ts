import { Injectable } from '@angular/core';
import {Sort} from '@angular/material/sort';

@Injectable()
export class SorterService {

    constructor() {
    }

    sort(collection: any[], prop, dir) {
        const data = collection.slice();
        const isAsc = dir === 'asc';

        data.sort((a: any, b:any) => {
            let aVal: any;
            let bVal: any;

            if (prop && prop.indexOf('.') > -1) {
                aVal = this.resolveProperty(prop, a);
                bVal = this.resolveProperty(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }

            if (this.isString(aVal)) aVal = aVal.trim().toUpperCase();
            if (this.isString(bVal)) bVal = bVal.trim().toUpperCase();

            return this.compare(aVal, bVal, isAsc)
        });

        return data;
    }

    isString(val: any) : boolean {
        return (val && (typeof val === 'string' || val instanceof String));
    }
    resolveProperty(path: string, obj: any) {
        return path.split('.').reduce(function(prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self)
    }
    compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}

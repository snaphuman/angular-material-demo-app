import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    styleUrls: ['./customers-list.component.sass'],
    template: `
<mat-form-field>
  <mat-label>Filter</mat-label>
  <input matInput [(ngModel)]="filter">
</mat-form-field>
`
})
export class FilterTextboxComponent implements OnInit {

    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {

    }
}

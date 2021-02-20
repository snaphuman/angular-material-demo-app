import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

import { CustomersRoutingModule } from './customers-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AngularSplitModule } from 'angular-split'

import { FlexLayoutModule } from '@angular/flex-layout';
import { OrdersModule } from '../orders/orders.module';
import { OrdersComponent } from '../orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    OrdersModule,
    CustomersRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    AngularSplitModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  exports: [ CustomersComponent, CustomersListComponent ]
})
export class CustomersModule { }

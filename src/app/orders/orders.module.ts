import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }

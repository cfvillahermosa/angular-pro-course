import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {StockInventoryComponent} from './containers/stock-inventory/stock-inventory.component';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule {}
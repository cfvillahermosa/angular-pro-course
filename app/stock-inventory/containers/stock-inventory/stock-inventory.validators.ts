import { AbstractControl } from '@angular/forms';

export class StockValidators {
  // static property makes the function accessible without calling new StockValidators() and then call checkBranch method
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i; // A123 for example
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }
  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) {
      return null;
    }

    const exists = stockItem.value.some(stock => {
      return stock.product_id === parseInt(selector.value.product_id, 10);
    });

    return exists ? { stockExists: true } : null;
  }
}

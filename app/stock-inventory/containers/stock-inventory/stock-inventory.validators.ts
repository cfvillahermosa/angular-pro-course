import { AbstractControl } from '@angular/forms';

export class StockValidators {
  // static property makes the function accessible without calling new StockValidators() and then call checkBranch method
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i; // A123 for example
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }
}

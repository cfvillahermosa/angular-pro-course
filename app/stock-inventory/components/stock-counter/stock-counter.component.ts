import { Component, Input, forwardRef } from '@angular/core';
// ControlValueAccessor & NG_VALUE_ACCESSOR allow us to use our own component to talk to the formgroups
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR, // This allow us to gaining access to the existing value
  useExisting: forwardRef(() => StockCounterComponent), // Allow us to hoist or to wait for the StockCounterComponent to become Available
  multi: true // We are extending NG_VALUE_ACCESSOR with our own StockCounterComponent
};

@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['./stock-counter.component.scss'],
  template: `
    <div class="stock-counter" [class.focused]="focus">
      <div>
        <div tabindex="0" (keydown)="onKeyDown($event)" (blur)="onBlur($event)" (focus)="onFocus($event)">
          <p>{{ value }}</p>
          <div>
            <button type="button" (click)="increment()" [disabled]="value === max">+</button>
            <button type="button" (click)="decrement()" [disabled]="value === min">-</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockCounterComponent implements ControlValueAccessor {
  private onModelChange: Function;
  private onTouch: Function;

  /**
   * Write a new value to the element.
   */
  writeValue(value) {
    console.log('*** writeValue(value)', value);
    this.value = value || 0;
  }

  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn) {
    this.onModelChange = fn; // we are binding the function to the corresponding internal function
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouch = fn; // we are binding the function to the corresponding internal function
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;
  focus: boolean;
  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch(); // we are just notifying here that the control has been changed
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch(); // we are just notifying here that the control has been changed
  }
}

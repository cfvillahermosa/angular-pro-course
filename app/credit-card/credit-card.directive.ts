import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[credit-card]",
})
export class CreditCardDirective {
  // allow us communicate our host node and add a property or change the value of a property
  @HostBinding('style.border')
  border: string;

  // fires after each key down event in the input html element
  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, "");
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }
    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(" ");
    this.border = '';
    if(/[^\d]+/.test(trimmed)){
      this.border = '1px solid red';
    }
  }
}

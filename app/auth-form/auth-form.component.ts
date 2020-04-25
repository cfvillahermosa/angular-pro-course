import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  Renderer,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { User } from "./auth-form.interface";
import { AuthMessageComponent } from "./auth-message.component";
import { AuthRememberComponent } from "./auth-remember.component";

@Component({
  selector: "auth-form",
  styles: [
    `
      .email {
        border-color: #9f72e6;
      }
    `,
  ],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <button type="submit">{{ title }}</button>
      </form>
    </div>
  `,
})
export class AuthFormComponent {
  public title = "Login";

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}

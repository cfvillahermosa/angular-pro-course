import {
  Component,
  TemplateRef,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
  AfterContentInit,
  ComponentFactoryResolver,
} from "@angular/core";

import { AuthFormComponent } from "./auth-form/auth-form.component";

import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "app-root",
  template: `
    <div>
      <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx">
      </ng-container>
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `,
})
export class AppComponent {
  ctx = {
    $implicit: "Carlos Villa",
    location: "Madrid, Spain",
  };
}

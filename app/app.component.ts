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
      <ng-container [ngTemplateOutlet]="tmpl"> </ng-container>
      <template #tmpl>
        Carlos Villa : Madrid, Spain
      </template>
    </div>
  `,
})
export class AppComponent {}

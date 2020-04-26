import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "app-root",
  template: `
    <div>
      <!-- Container div for adding components with create component method of ComponentFactoryResolver -->
      <div #entry></div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  // 1 - we create the ViewChild element that will contain dynamic components
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    // used for creating component instances
    // 2 - we inject into our constructor ComponentFactoryResolver
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    // component factory for AuthFormComponent because we can create multiple instances of this component
    // 3 - we create the component factory
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    // 4 - we add into our container our component factory
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account';
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log("*** Login", user);
  }
}

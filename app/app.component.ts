import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "app-root",
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <button (click)="moveComponent()">
        Move
      </button>
      <!-- Container div for adding components with create component method of ComponentFactoryResolver -->
      <div #entry></div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

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
    this.entry.createComponent(authFormFactory);
    // 4 - we add into our container our component factory at index 0
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = "Create account";
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    // we move the component into hostview at index position 1
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log("*** Login", user);
  }
}

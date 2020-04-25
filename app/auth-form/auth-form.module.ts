import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AuthFormComponent } from "./auth-form.component";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent, AuthRememberComponent],
  // when we create dynamic components wich may not be compiled at runtime, they might be compiled later
  entryComponents: [AuthFormComponent]
})
export class AuthFormModule {}

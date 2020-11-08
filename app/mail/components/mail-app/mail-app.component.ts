import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
    <div class="mail">
      <!-- http://localhost:4000/folder/inbox(pane:message/1) -->
      <router-outlet name="pane"></router-outlet>
    </div>
  `
})
export class MailAppComponent {
  onActivate(event) {
    console.log('*** Activate: ', event);
  }
  onDeactivate(event) {
    console.log('*** Deactivate: ', event);
  }
}

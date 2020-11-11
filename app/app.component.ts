import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Counter: {{ counter }}</div>
  `
})
export class AppComponent {
  counter = 0;
}

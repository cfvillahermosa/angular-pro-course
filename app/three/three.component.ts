import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  encapsulation: ViewEncapsulation.None, // encapsulation none essentially writes global styles into our DOM
  styles: [`
    .example-one {
      border: 2px solid green;
    }
  `],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleThreeComponent {

}

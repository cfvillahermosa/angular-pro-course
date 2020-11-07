import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../../models/mail.interface';
@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title | async }}</h2>
    <mail-item *ngFor="let message of messages | async" [message]="message"> </mail-item>
  `
})
export class MailFolderComponent {
  messages: Observable<Mail[]> = this.router.data.pluck('messages');
  title: Observable<string> = this.router.params.pluck('name');
  constructor(private router: ActivatedRoute) {}
}
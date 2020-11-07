import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent, resolve: { messages: MailFolderResolver } }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [MailFolderComponent, MailAppComponent, MailItemComponent],
  providers: [MailService, MailFolderResolver],
  exports: [MailAppComponent]
})
export class MailModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolver } from './components/mail-view/mail-view.resolve';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      messages: MailFolderResolver
    }
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane',
    resolve: {
      message: MailViewResolver
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [MailFolderComponent, MailAppComponent, MailItemComponent, MailViewComponent],
  providers: [MailService, MailFolderResolver, MailViewResolver],
  exports: [MailAppComponent]
})
export class MailModule {}

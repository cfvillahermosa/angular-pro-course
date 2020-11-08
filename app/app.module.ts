import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';
import {AuthModule} from '././auth/auth.module';
import {AuthGuard} from './auth/auth.guard';
export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null);
  }
}

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    data: { preload: true },
    canLoad: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [AppComponent],
  providers: [CustomPreload],
  imports: [BrowserModule, HttpModule, MailModule, AuthModule, RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })],
  bootstrap: [AppComponent]
})
export class AppModule {}

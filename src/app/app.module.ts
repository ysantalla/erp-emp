import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-MX';

registerLocaleData(localeCl, 'es-MX');

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/+home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: './views/+admin/admin.module#AdminModule'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules
    }),

    CoreModule,
    SharedModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CU' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

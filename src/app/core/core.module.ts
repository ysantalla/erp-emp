import {
  NgModule,
  SkipSelf,
  Optional,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClientModule
} from '@angular/common/http';
import { AuthGuard } from '@app/core/guard/auth.guard';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {environment as env} from '@env/environment';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthGuard,
  ],
  declarations: []
})
export class CoreModule {

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAsyN6WfW9hqmAgvF_iKAaxtUp3cnY1QP8",
  authDomain: "project-85d68.firebaseapp.com",
  projectId: "project-85d68",
  storageBucket: "project-85d68.appspot.com",
  messagingSenderId: "1065787721213",
  appId: "1:1065787721213:web:eb8e8409943da3cb3a0594",
  measurementId: "G-3P6RKKZNC4"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

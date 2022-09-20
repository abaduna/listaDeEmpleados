import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const config = {
  apiKey: "AIzaSyCV2kZRWzKJmt5z-CUs--tlSEf99qaSPPY",
  authDomain: "firechat-5625e.firebaseapp.com",
  projectId: "firechat-5625e",
  storageBucket: "firechat-5625e.appspot.com",
  messagingSenderId: "337659593940",
  appId: "1:337659593940:web:dc3b1898088c9afba3a741"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
    
  
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

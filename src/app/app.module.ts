import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const config = {
    apiKey: "AIzaSyBokbrS3f62xUt8ROwSUTkwVvF80TGR4JU",
    authDomain: "pepper-23a55.firebaseapp.com",
    databaseURL: "https://pepper-23a55.firebaseio.com",
    projectId: "pepper-23a55",
    storageBucket: "pepper-23a55.appspot.com",
    messagingSenderId: "1031911729565"
  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

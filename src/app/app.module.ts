import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'catalinacano08hotmail.onmicrosoft.com',
      clientId: '63f3972c-81cc-4cce-9d50-d0344d1e0c8b',
      redirectUri: window.location.origin,
      endpoints: {
        'https://login.microsoftonline.com/41499052-44d4-41f5-8a80-1d37b17703c8/oauth2/authorize': 'xxx-bae6-4760-b434-xxx'
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

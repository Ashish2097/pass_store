import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from 'src/common/http-interceptor';
import { PasswordListComponent } from './password-list/password-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    PasswordListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

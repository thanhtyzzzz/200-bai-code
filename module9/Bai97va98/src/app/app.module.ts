import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';  // Import RegistrationComponent

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent  // Declare RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Import ReactiveFormsModule for form handling
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

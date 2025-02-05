import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFashionComponent } from './client-fashion/client-fashion.component';
import { ClientFashionDetailComponent } from './client-fashion-detail/client-fashion-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientFashionStyleComponent } from './client-fashion-style/client-fashion-style.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    ClientFashionComponent,
    ClientFashionDetailComponent,
    ClientFashionStyleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
